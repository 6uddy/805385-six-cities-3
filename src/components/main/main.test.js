import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from "./main.jsx";

const TestData = {
  OFFERS: [
    {
      name: `Prinsengracht`,
      coordinates: [52.3909553943508, 4.929309666406198],
      id: 1,
      price: 74,
      type: `Hotel`,
      premium: true,
      isFavorites: true,
      rating: 4.7,
      reviews: [
        {
          author: `Bill`,
          review: `A quiet cozy and picturesque that.`,
          userRating: 0,
          date: `January 2018`
        },
        {
          author: `Ed`,
          review: `The building is green and from 18th century.`,
          userRating: 3,
          date: `September 2019`
        }
      ]
    },
    {
      name: `Nice apartment`,
      coordinates: [52.3809553943508, 4.939309666406198],
      id: 2,
      price: 90,
      type: `Apartment`,
      premium: false,
      isFavorites: true,
      rating: 4.7,
      reviews: [
        {
          author: `Hanna`,
          review: `Unique lightness of Amsterdam. The building is green and from 18th century.`,
          userRating: 1,
          date: `April 2017`
        },
        {
          author: `Ed`,
          review: `The building is green and from 18th century.`,
          userRating: 3,
          date: `September 2019`
        }
      ]
    }
  ]
};

it(`Render main`, () => {
  const tree = renderer
    .create(
        <Main
          offers = {TestData.OFFERS}
          onCardHeadingClick = {() => {}}
          selectedCity = {`Cologne`}
          onCityTabClick = {() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

