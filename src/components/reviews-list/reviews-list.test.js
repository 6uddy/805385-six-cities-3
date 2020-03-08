import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewsList} from './reviews-list.jsx';

const TestData = {
  REVIEWS: [
    {
      id: 1,
      author: `Mike`,
      review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      userRating: 5,
      date: `April 2017`
    },
    {
      id: 2,
      author: `Stephen`,
      review: `The building is green and from 18th century.`,
      userRating: 4,
      date: `April 2017`
    }
  ]
};

it(`ReviewItem component structure test`, () => {
  const tree = renderer
  .create(
      <ReviewsList
        reviews = {TestData.REVIEWS}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
