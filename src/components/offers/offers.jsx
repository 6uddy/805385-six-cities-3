import React from 'react';
import PropTypes from 'prop-types';
import {OffersCardList} from '../offer-card-list/offer-card-list.jsx';
import {Map} from '../map/map.jsx';
import {OffersSortOptions} from '../offers-sort-options/offers-sort-options.jsx';


export const Offers = ({offers, onCardHeadingClick, offersSortType, onSortOptionClick, offerInMouseEnterId, onOfferMouseInteract}) => (
  <div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <OffersSortOptions
          offersSortType = {offersSortType}
          onSortOptionClick = {onSortOptionClick}
        />
        <OffersCardList
          offers = {offers}
          onCardHeadingClick = {onCardHeadingClick}
          offersSortType = {offersSortType}
          onOfferMouseInteract = {onOfferMouseInteract}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers = {offers}
            selectedOfferId = {offerInMouseEnterId}
          />
        </section>
      </div>
    </div>
  </div>
);

Offers.propTypes = {
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
  offersSortType: PropTypes.string.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  offerInMouseEnterId: PropTypes.string,
  onOfferMouseInteract: PropTypes.func.isRequired
};
