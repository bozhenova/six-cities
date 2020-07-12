import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { findItemById } from '../utils';
import { Operations } from '../redux/reducer/favorites/actions';
import * as selectors from '../redux/reducer/data/selectors';

const withFavorite = Component => {
  class WithFavorite extends PureComponent {
    updateFavoriteOffers = id => {
      const { offers, updateFavorites } = this.props;
      const offer = findItemById(id, offers);
      updateFavorites(id, offer);
    };

    render() {
      return (
        <Component
          {...this.props}
          updateFavoriteOffers={this.updateFavoriteOffers}
        />
      );
    }
  }

  return WithFavorite;
};

const mapStateToProps = state => ({
  offers: selectors.getSortedOffers(state),
  currentOfferId: selectors.getCurrentOfferId(state)
});

const mapDispatchToProps = dispatch => ({
  updateFavorites: (id, offer) =>
    dispatch(Operations.updateFavorites(id, offer))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFavorite
);
