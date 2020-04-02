import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from "./reviews-item.jsx";

const review = {
  id: 0,
  comment: `The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.`,
  date: new Date(2020, 1, 1, 0, 0, 0, 0).toISOString(),
  rating: 3.5,
  user: {
    id: 0,
    name: `Max`,
    avatarUrl: `/img/avatar-max.jpg`,
    isPro: true
  },
};

it(`Test ReviewsItem component`, () => {

  const tree = renderer
    .create(
        <ReviewsItem
          review={review}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
