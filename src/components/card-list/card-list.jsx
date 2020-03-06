import React from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card.jsx';


export class CardList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItemData: null
    };
    this.onUpdateState = this.onUpdateState.bind(this);
  }

  onUpdateState(activeItemData) {
    this.setState({
      activeItemData
    });
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          this.props.offersNames.map((name) => <Card
            offerName={name}
            onUpdateState={this.onUpdateState}
            key={Math.random()}
          />)
        }
      </div>
    );
  }
}

CardList.propTypes = {
  offersNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
