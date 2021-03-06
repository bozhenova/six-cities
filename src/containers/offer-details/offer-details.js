import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const shortid = require('shortid');

import { getReviews } from '../../redux/reducer/reviews/selectors';
import { getAuthorizationStatus } from '../../redux/reducer/user/selectors';
import { Operations as ReviewsOperations } from '../../redux/reducer/reviews/actions';
import { getNearbyOffers, getOffer } from '../../redux/reducer/data/selectors';
import {
  ActionCreator,
  Operations as DataOperations
} from '../../redux/reducer/data/actions';

import Map from '../../components/map';
import Spinner from '../../components/spinner';
import { Constants } from '../../constants';
import Header from '../../components/header';
import ReviewForm from '../../components/review-form';
import OffersList from '../../components/offers-list';
import ReviewsList from '../../components/reviews-list';
import FavoriteButton from '../../components/favorite-button';

class OfferDetails extends PureComponent {
  static propTypes = {
    offer: PropTypes.object,
    nearbyOffers: PropTypes.array.isRequired,
    reviews: PropTypes.any,
    loadReviews: PropTypes.func.isRequired,
    setCurrentOffer: PropTypes.func.isRequired,
    loadNearbyOffers: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const {
      loadNearbyOffers,
      loadReviews,
      match,
      setCurrentOffer
    } = this.props;
    const id = parseInt(match.params.id);
    setCurrentOffer(id);
    loadNearbyOffers(id);
    loadReviews(id);
  }

  componentDidUpdate(prevProps) {
    const {
      loadNearbyOffers,
      loadReviews,
      match,
      setCurrentOffer
    } = this.props;
    const id = parseInt(match.params.id);
    if (prevProps.match !== match) {
      setCurrentOffer(id);
      loadNearbyOffers(id);
      loadReviews(id);
    }
  }

  render() {
    const {
      reviews,
      nearbyOffers,
      match,
      offer,
      isAuthorizationRequired
    } = this.props;

    const {
      isPremium,
      rating,
      price,
      title,
      isFavorite,
      bedrooms,
      maxAdults,
      host,
      description,
      images,
      goods,
      id
    } = offer;

    const gallery = Object.keys(offer).length
      ? images.slice(0, Constants.AMOUNT_PHOTOS).map(image => (
          <div className='property__image-wrapper' key={shortid.generate()}>
            <img className='property__image' src={image} alt='Photo property' />
          </div>
        ))
      : null;

    const amenities = Object.keys(offer).length
      ? goods.map(amenity => (
          <li className='property__inside-item' key={shortid.generate()}>
            {amenity}
          </li>
        ))
      : null;

    return (
      <div className='page'>
        <Header />
        <main className='page__main page__main--property'>
          {Object.keys(offer).length ? (
            <section className='property'>
              <div className='property__gallery-container container'>
                <div className='property__gallery'>{gallery}</div>
              </div>
              <div className='property__container container'>
                <div className='property__wrapper'>
                  {isPremium && (
                    <div className='place-card__mark'>
                      <span>Premium</span>
                    </div>
                  )}
                  <div className='property__name-wrapper'>
                    <h1 className='property__name'>{title}</h1>
                    <FavoriteButton
                      id={id}
                      isFavorite={isFavorite}
                      prefixClass={'property'}
                      width={31}
                      height={33}
                      match={match}
                    />
                  </div>
                  <div className='property__rating rating'>
                    <div className='property__stars rating__stars'>
                      <span
                        style={{
                          width: `${(rating * 100) / Constants.MAX_RATING}%`
                        }}
                      />
                      <span className='visually-hidden'>Rating</span>
                    </div>
                    <span className='property__rating-value rating__value'>
                      {rating}
                    </span>
                  </div>
                  <ul className='property__features'>
                    <li className='property__feature property__feature--entire'>
                      Entire place
                    </li>
                    <li className='property__feature property__feature--bedrooms'>
                      {bedrooms > 1
                        ? `${bedrooms} Bedrooms`
                        : `${bedrooms} Bedroom`}
                    </li>
                    <li className='property__feature property__feature--adults'>
                      Max {maxAdults} adults
                    </li>
                  </ul>
                  <div className='property__price'>
                    <b className='property__price-value'>&euro;{price}</b>
                    <span className='property__price-text'>&nbsp;night</span>
                  </div>
                  <div className='property__inside'>
                    <h2 className='property__inside-title'>
                      What&apos;s inside
                    </h2>
                    <ul className='property__inside-list'>{amenities}</ul>
                  </div>
                  <div className='property__host'>
                    <h2 className='property__host-title'>Meet the host</h2>
                    <div className='property__host-user user'>
                      <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                        <img
                          className='property__avatar user__avatar'
                          src={`${host.avatar}`}
                          width='74'
                          height='74'
                          alt='Host avatar'
                        />
                      </div>
                      <span className='property__user-name'>{host.name}</span>
                      {host.isPro && (
                        <span className='property__user-status'>Pro</span>
                      )}
                    </div>
                    <div className='property__description'>
                      <p className='property__text'>{description}</p>
                    </div>
                  </div>
                  {reviews.length > 0 && (
                    <section className='property__reviews reviews'>
                      <h2 className='reviews__title'>
                        Reviews &middot;
                        <span className='reviews__amount'>
                          {reviews.length}
                        </span>
                      </h2>
                      <ReviewsList reviews={reviews} />
                      {!isAuthorizationRequired && (
                        <ReviewForm currentOfferId={id} />
                      )}
                    </section>
                  )}
                </div>
              </div>
              <section className='property__map map'>
                {nearbyOffers.length ? <Map offers={nearbyOffers} /> : null}
              </section>
            </section>
          ) : (
            <Spinner />
          )}
          <div className='container'>
            {nearbyOffers.length ? (
              <section className='near-places places'>
                <h2 className='near-places__title'>
                  Other places in the neighbourhood
                </h2>
                <OffersList
                  offers={nearbyOffers}
                  classModOffers={['near-places__list']}
                  classModPrefix={'near-places'}
                  mainClassMod={'near-places__card'}
                />
              </section>
            ) : null}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;
  return {
    offer: getOffer(state, id) || {},
    nearbyOffers: getNearbyOffers(state),
    reviews: getReviews(state),
    isAuthorizationRequired: getAuthorizationStatus(state)
  };
};

const mapDispatchToProps = dispatch => ({
  loadReviews: id => dispatch(ReviewsOperations.loadReviews(id)),
  loadNearbyOffers: id => dispatch(DataOperations.loadNearbyOffers(id)),
  setCurrentOffer: id => dispatch(ActionCreator.setCurrentOffer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
