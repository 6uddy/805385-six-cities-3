import React from 'react';
import renderer from 'react-test-renderer';
import {App} from "./app.jsx";


const TestData = {
  OFFERS: [
    {
      name: `Canal`,
      coordinates: [52.3909553943508, 4.929309666406198],
      id: 1,
      price: 110,
      type: `Room`,
      premium: false,
      isFavorites: true,
      rating: 4.2,
      reviews: [
        {
          author: `Edward`,
          review: `A quiet cozy and picturesque that.`,
          userRating: 2,
          date: `January 2017`
        },
        {
          author: `Stephen`,
          review: `The building is green and from 18th century.`,
          userRating: 4,
          date: `April 2017`
        }
      ]
    },
    {
      name: `Nice, warm big bed apartment`,
      coordinates: [52.3809553943508, 4.939309666406198],
      id: 2,
      price: 177,
      type: `Lux apartment`,
      premium: true,
      isFavorites: false,
      rating: 2.2,
      reviews: [
        {
          author: `Mike`,
          review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          userRating: 5,
          date: `April 2017`
        },
        {
          author: `Stephen`,
          review: `The building is green and from 18th century.`,
          userRating: 4,
          date: `April 2017`
        }
      ]
    }
  ]
};

it(`App test`, () => {
  const tree = renderer
    .create(
        <App
          offers = {TestData.OFFERS}
          onCardHeadingClick = {() => {}}
          selectedCity = {`Paris`}
          onCityTabClick = {() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

