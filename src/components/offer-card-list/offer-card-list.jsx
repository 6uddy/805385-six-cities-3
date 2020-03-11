import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {OfferCard} from '../offer-card/offer-card.jsx';
import {SortOption} from '../../utils/utils.js';
import {CompareDirection} from '../../utils/utils.js';
import {compare} from '../../utils/utils.js';

const RENDER_MODE_TO_MAIN = `toMain`;
const OfferKey = {
  PRICE: `price`,
  RATING: `rating`
};
const getSortedOffers = (sortType, offers) => {
  switch (sortType) {
    case SortOption.DEFAULT: return offers;
    case SortOption.BY_PRICE_LOW_TO_HIGHT: return offers.sort(compare(OfferKey.PRICE, CompareDirection.DESC));
    case SortOption.BY_PRICE_HIGHT_TO_LOW: return offers.sort(compare(OfferKey.PRICE, CompareDirection.ASC));
    case SortOption.BY_RATING_HIGHT_TO_LOW: return offers.sort(compare(OfferKey.RATING, CompareDirection.ASC));
  }
  return offers;
};
const OffersCardListComponent = ({sortedOffers, onOfferMouseInteract, onCardHeadingClick}) => (
  <div className="cities__places-list places__list tabs__content">
    {
      sortedOffers.map((offerItem) => <OfferCard
        offer = {offerItem}
        onOfferMouseInteract = {onOfferMouseInteract}
        onCardHeadingClick = {onCardHeadingClick}
        key = {offerItem.id}
        renderMode = {RENDER_MODE_TO_MAIN}
      />)
    }
  </div>
);
export const OffersCardList = React.memo(OffersCardListComponent);

OffersCardListComponent.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired,
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired,
        isFavorites: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.exact({
              author: PropTypes.string.isRequired,
              review: PropTypes.string.isRequired,
              userRating: PropTypes.number.isRequired,
              date: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
      }).isRequired
  ).isRequired,
  onCardHeadingClick: PropTypes.func.isRequired,
  onOfferMouseInteract: PropTypes.func.isRequired,
  sortedOffers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  sortedOffers: getSortedOffers(state.offersSortType, state.offers).slice(),
});
const mapDispatchToProps = (dispatch) => ({
  onCardHeadingClick(selectedOffer) {
    /* передать null для возврата к главному экрану */
    dispatch(ActionCreator.selectOffer(selectedOffer));
  },
  onOfferMouseInteract(id) {
    dispatch(ActionCreator.getOfferId(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersCardList);
