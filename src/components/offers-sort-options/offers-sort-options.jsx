import React from 'react';
import PropTypes from 'prop-types';
import {SortOption} from '../../utils/utils.js';
import {getValuesListFromEnum} from '../../utils/utils.js';

export const OffersSortOptions = ({offersSortType, onSortOptionClick}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {offersSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          getValuesListFromEnum(SortOption).map((sortType) => (
            <li onClick={() => onSortOptionClick(sortType)} className={`places__option${offersSortType === sortType ? ` places__option--active` : ``}`} key={Math.random()} tabIndex="0">{sortType}</li>)
          )
        }
      </ul>
    </form>
  );
};

OffersSortOptions.propTypes = {
  offersSortType: PropTypes.string.isRequired,
  onSortOptionClick: PropTypes.func.isRequired
};
