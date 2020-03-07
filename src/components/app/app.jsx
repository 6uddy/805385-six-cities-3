import React from 'react';
import PropTypes from 'prop-types';
import {Main} from '../main/main.jsx';
import {OfferCardDetails} from '../offer-card-details/offer-card-details.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedCardName: null
    };
    this.onCardHeadingClick = this.onCardHeadingClick.bind(this);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.getScreen()}
          </Route>
          <Route exact path="/offer">
            <OfferCardDetails
              offerName = {this.state.selectedCardName}
              offerCoords = {this.props.offerCoords}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  getScreen() {
    let component = null;
    if (this.state.selectedCardName) {
      component = <OfferCardDetails
        offerName = {this.state.selectedCardName}
        offerCoords = {this.props.offerCoords}
      />;
    } else {
      component = <Main
        offersAmount = {this.props.offersAmount}
        offersNames = {this.props.offersNames}
        onCardHeadingClick = {this.onCardHeadingClick}
        offerCoords = {this.props.offerCoords}
      />;
    }
    return component;
  }

  onCardHeadingClick(selectedCardName) {
    this.setState({
      selectedCardName
    });
  }
}

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
  offersNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  offerCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired)).isRequired
};
