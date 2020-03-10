import React from 'react';
import PropTypes from 'prop-types';
import {Main} from '../main/main.jsx';
import {OfferCardDetails} from '../offer-card-details/offer-card-details.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
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
              offerCurrent = {this.props.selectedOffer}
              offers = {this.props.offers}
              onCardHeadingClick = {this.props.onCardHeadingClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  get screen() {
    if (this.props.selectedOffer) {
      return <OfferCardDetails
        offerCurrent = {this.props.selectedOffer}
        offers = {this.props.offers}
        onCardHeadingClick = {this.props.onCardHeadingClick}
      />;
    }
    return <Main
      offers = {this.props.offers}
      onCardHeadingClick = {this.props.onCardHeadingClick}
      selectedCity = {this.props.selectedCity}
      onCityTabClick = {this.props.onCityTabClick}
      offersSortType = {this.props.offersSortType}
      onSortOptionClick = {this.props.onSortOptionClick}
      offerInMouseEnterId = {this.props.offerInMouseEnterId}
      onOfferMouseInteract = {this.props.onOfferMouseInteract}
    />;
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
  ).isRequired,
  onCardHeadingClick: PropTypes.func.isRequired,
  onCityTabClick: PropTypes.func.isRequired,
  selectedOffer: PropTypes.exact({
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
  }),
  selectedCity: PropTypes.string.isRequired,
  offersSortType: PropTypes.string.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  offerInMouseEnterId: PropTypes.string,
  onOfferMouseInteract: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity,
    offers: state.offers,
    selectedOffer: state.currentOffer,
    offersSortType: state.offersSortType,
    offerInMouseEnterId: state.offerInMouseEnterId
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardHeadingClick(selectedOffer) {
    /* передать null для возврата к главному экрану */
    dispatch(ActionCreator.selectOffer(selectedOffer));
  },
  onCityTabClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getCityOffers(city));
  },
  onSortOptionClick(sortType) {
    dispatch(ActionCreator.changeOffersSortType(sortType));
  },
  onOfferMouseInteract(id) {
    dispatch(ActionCreator.getOfferInMouseEnterId(id));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
