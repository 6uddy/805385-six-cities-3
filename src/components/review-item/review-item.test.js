import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewItem} from './review-item.jsx';

const TestData = {
  REVIEW: {
    id: 1,
    author: `Ed`,
    review: `The building is green and from 18th century.`,
    userRating: 3,
    date: `September 2019`
  }
};

it(`ReviewItem component structure test`, () => {
  const tree = renderer
  .create(
      <ReviewItem
        reviewItem = {TestData.REVIEW}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
