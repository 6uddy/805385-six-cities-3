import React from 'react';
import PropTypes from 'prop-types';
import {Main} from '../main/main.jsx';
import {CardDetails} from '../card-details/card-details.jsx';
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
            <CardDetails
              offerName = {this.state.selectedCardName}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  getScreen() {
    let component = null;
    if (this.state.selectedCardName) {
      component = <CardDetails
        offerName = {this.state.selectedCardName}
      />;
    } else {
      component = <Main
        offersAmount = {this.props.offersAmount}
        offersNames = {this.props.offersNames}
        onCardHeadingClick = {this.onCardHeadingClick}
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
  offersNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
