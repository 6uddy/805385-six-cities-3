import React from 'react';
import PropTypes from 'prop-types';
import {ReviewItem} from '../review-item/review-item.jsx';

export const ReviewsList = ({reviews}) => (
  <ul className="reviews__list">
    {
      reviews.map((review) => (<ReviewItem
        reviewItem = {review}
        key = {1}
      />))
    }
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        review: PropTypes.string.isRequired,
        userRating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};
