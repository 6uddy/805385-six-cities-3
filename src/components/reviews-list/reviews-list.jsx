import React from 'react';
import PropTypes from 'prop-types';
import {ReviewItem} from '../review-item/review-item.jsx';

const ReviewsListComponent = ({reviews}) => (
  <ul className="reviews__list">
    {
      reviews.map((review) => (<ReviewItem
        reviewItem = {review}
        key = {Math.random()}
      />))
    }
  </ul>
);
export const ReviewsList = React.memo(ReviewsListComponent);

ReviewsListComponent.propTypes = {
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
