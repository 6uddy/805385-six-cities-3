import React from 'react';
import PropTypes from 'prop-types';
import {City} from '../../utils/utils.js';
import {getValuesListFromEnum} from '../../utils/utils.js';

export class CitiesTabs extends React.PureComponent {
  render() {
    return (
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              getValuesListFromEnum(City).map((city) => (
                <li className="locations__item" key={Math.random()}>
                  <a className={`locations__item-link tabs__item${this.props.selectedCity === city ? ` tabs__item--active` : ``}`} onClick={() => this.props.onCityTabClick(city)} href="#">
                    <span>{city}</span>
                  </a>
                </li>)
              )
            }
          </ul>
        </section>
      </div>
    );
  }
}

CitiesTabs.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  onCityTabClick: PropTypes.func.isRequired
};
