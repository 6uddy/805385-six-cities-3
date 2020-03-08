import React from 'react';
import PropTypes from 'prop-types';
import {OfferCard} from '../offer-card/offer-card.jsx';

const RENDER_MODE_TO_MAIN = `toMain`;

export class OffersCardList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItemData: null
    };
    this.onOfferMouseInteract = this.onOfferMouseInteract.bind(this);
  }
  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          this.props.offers.map((offerItem) => <OfferCard
            offer = {offerItem}
            onOfferMouseInteract = {this.onOfferMouseInteract}
            onCardHeadingClick = {this.props.onCardHeadingClick}
            key = {offerItem.id}
            renderMode = {RENDER_MODE_TO_MAIN}
          />)
        }
      </div>
    );
  }
  onOfferMouseInteract(activeItemData) {
    this.setState({
      activeItemData
    });
  }
}

OffersCardList.propTypes = {
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
  onCardHeadingClick: PropTypes.func.isRequired
};
