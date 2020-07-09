import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const shortid = require('shortid');

import * as DataSelectors from '../../redux/reducer/data/selectors';
import * as ReviewsSelectors from '../../redux/reducer/reviews/selectors';
import * as UserSelectors from '../../redux/reducer/user/selectors';
import { Operations as ReviewsOperations } from '../../redux/reducer/reviews/actions';
import {
  Operations as DataOperations,
  ActionCreators
} from '../../redux/reducer/data/actions';
import HeaderWrapped from '../../components/header';
import ReviewsList from '../../components/reviews-list';
import Map from '../../components/map';
import OffersList from '../../components/offers-list';
import { Constants } from '../../constants';
import ReviewForm from '../../components/review-form';

class OfferDetails extends PureComponent {
  static propTypes = {
    offers: PropTypes.array.isRequired,
    nearbyOffers: PropTypes.array.isRequired,
    reviews: PropTypes.any,
    loadReviews: PropTypes.func.isRequired,
    loadNearbyOffers: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { loadNearbyOffers, loadReviews } = this.props;
    loadNearbyOffers(this.id);
    loadReviews(this.id);
  }

  render() {
    this.id = parseInt(this.props.match.params.id);
    const {
      offers,
      reviews,
      nearbyOffers,
      match,
      isAuthorizationRequired
    } = this.props;
    const offer = offers.find(offer => offer.id === this.id);
    const {
      isPremium,
      rating,
      price,
      title,
      bedrooms,
      maxAdults,
      host,
      description,
      images,
      goods,
      id
    } = offer;

    const gallery = images.slice(0, Constants.AMOUNT_PHOTOS).map(image => (
      <div className='property__image-wrapper' key={shortid.generate()}>
        <img className='property__image' src={image} alt='Photo property' />
      </div>
    ));

    const amenities = goods.map(amenity => (
      <li className='property__inside-item' key={shortid.generate()}>
        {amenity}
      </li>
    ));

    return (
      <div className='page'>
        <HeaderWrapped />
        <main className='page__main page__main--property'>
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
                  <button
                    className='property__bookmark-button button'
                    type='button'
                  >
                    <svg
                      className='property__bookmark-icon'
                      width='31'
                      height='33'
                    >
                      <use xlinkHref='#icon-bookmark' />
                    </svg>
                    <span className='visually-hidden'>To bookmarks</span>
                  </button>
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
                  <h2 className='property__inside-title'>What&apos;s inside</h2>
                  <ul className='property__inside-list'>{amenities}</ul>
                </div>
                <div className='property__host'>
                  <h2 className='property__host-title'>Meet the host</h2>
                  <div className='property__host-user user'>
                    <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                      <img
                        className='property__avatar user__avatar'
                        src={`/${host.avatar}`}
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
                {reviews.length ? (
                  <section className='property__reviews reviews'>
                    <h2 className='reviews__title'>
                      Reviews &middot;
                      <span className='reviews__amount'>{reviews.length}</span>
                    </h2>
                    <ReviewsList reviews={reviews} />
                    {!isAuthorizationRequired && (
                      <ReviewForm currentOfferId={id} />
                    )}
                  </section>
                ) : null}
              </div>
            </div>
            <section className='property__map map'>
              {nearbyOffers.length ? <Map offers={nearbyOffers} /> : null}
            </section>
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>
                Other places in the neighbourhood
              </h2>
              {nearbyOffers.length ? (
                <OffersList
                  match={match}
                  offers={nearbyOffers}
                  classModOffers={['near-places__list']}
                  classModPrefix={'near-places'}
                  mainClassMod={'near-places__card'}
                />
              ) : null}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCity: DataSelectors.getCurrentCity(state),
  offers: DataSelectors.getSortedOffers(state),
  nearbyOffers: DataSelectors.getNearbyOffers(state),
  reviews: ReviewsSelectors.getReviews(state),
  isAuthorizationRequired: UserSelectors.getAuthorizationStatus(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentOffer: id => dispatch(ActionCreators.setCurrentOffer(id)),
  loadReviews: id => dispatch(ReviewsOperations.loadReviews(id)),
  loadNearbyOffers: id => dispatch(DataOperations.loadNearbyOffers(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
