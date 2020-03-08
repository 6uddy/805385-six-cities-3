import React from 'react';
import PropTypes from 'prop-types';
import {Main} from '../main/main.jsx';
import {OfferCardDetails} from '../offer-card-details/offer-card-details.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOffer: null
    };
    this.onCardHeadingClick = this.onCardHeadingClick.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.screen}
          </Route>
          <Route exact path="/offer">
            <OfferCardDetails
              offerCurrent={this.state.selectedOffer}
              offers={this.props.offers}
              onCardHeadingClick={this.onCardHeadingClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  get screen() {
    if (this.state.selectedOffer) {
      return <OfferCardDetails
        offerCurrent={this.state.selectedOffer}
        offers={this.props.offers}
        onCardHeadingClick={this.onCardHeadingClick}
      />;
    }
    return <Main
      offers={this.props.offers}
      onCardHeadingClick={this.onCardHeadingClick}
    />;
  }

  onCardHeadingClick(selectedOffer) {
    this.setState({
      selectedOffer
    });
  }
}

App.propTypes = {
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
  ).isRequired
};
