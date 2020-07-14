import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Operations as DataOperations } from '../redux/reducer/data/actions';
import { Operations as FavoritesOperations } from '../redux/reducer/favorites/actions';
import {
  getSortedOffers,
  getCurrentOfferId
} from '../redux/reducer/data/selectors';
import { getAuthorizationStatus } from '../redux/reducer/user/selectors';

const withFavorite = Component => {
  class WithFavorite extends PureComponent {
    updateFavoriteOffers = (id, isFavorite, match) => {
      const { updateFavorites } = this.props;
      updateFavorites(id, isFavorite);
      this.updateOffers(match);
    };

    updateOffers = match => {
      const {
        currentOfferId,
        loadNearbyOffers,
        loadFavorites,
        loadOffers
      } = this.props;
      switch (match.path) {
        case '/offer/:id':
          loadNearbyOffers(currentOfferId);
        case '/favorites':
          loadFavorites();
        case '/':
          loadOffers();
      }
    };

    render() {
      const { isAuthRequired } = this.props;
      return (
        <Component
          {...this.props}
          updateFavoriteOffers={this.updateFavoriteOffers}
          isAuthRequired={isAuthRequired}
        />
      );
    }
  }

  return WithFavorite;
};

const mapStateToProps = state => ({
  offers: getSortedOffers(state),
  currentOfferId: getCurrentOfferId(state),
  isAuthRequired: getAuthorizationStatus(state)
});

const mapDispatchToProps = dispatch => ({
  updateFavorites: (id, isFavorite) =>
    dispatch(FavoritesOperations.updateFavorites(id, isFavorite)),
  loadNearbyOffers: id => dispatch(DataOperations.loadNearbyOffers(id)),
  loadFavorites: () => dispatch(FavoritesOperations.loadFavorites()),
  loadOffers: () => dispatch(DataOperations.loadOffers())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFavorite
);
