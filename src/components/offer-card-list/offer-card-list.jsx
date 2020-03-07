import React from 'react';
import PropTypes from 'prop-types';
import {OfferCard} from '../offer-card/offer-card.jsx';


export class OfferCardList extends React.PureComponent {
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
          this.props.offersNames.map((name) => <OfferCard
            offerName={name}
            onOfferMouseInteract = {this.onOfferMouseInteract}
            onCardHeadingClick = {this.props.onCardHeadingClick}
            key={Math.random()}
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

OfferCardList.propTypes = {
  offersNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCardHeadingClick: PropTypes.func.isRequired
};
