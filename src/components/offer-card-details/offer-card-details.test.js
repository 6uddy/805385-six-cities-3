import React from 'react';
import renderer from 'react-test-renderer';
import {OfferCardDetails} from './offer-card-details.jsx';

const TestData = {
  OFFERS: [
    {
      name: `Canal View Prinsengracht`,
      coordinates: [52.3909553943508, 4.929309666406198],
      id: 1,
      price: 100,
      type: `Hotel room`,
      premium: false,
      isFavorites: true,
      rating: 3.7,
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
    },
    {
      name: `Nice, cozy, warm big bed apartment`,
      coordinates: [52.3809553943508, 4.939309666406198],
      id: 2,
      price: 170,
      type: `Lux apartment`,
      premium: true,
      isFavorites: true,
      rating: 2.7,
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
    }
  ]
};

it(`OfferCard component structure test`, () => {
  const tree = renderer
    .create(
        <OfferCardDetails
          offerCurrent = {TestData.OFFERS[0]}
          offers = {TestData.OFFERS}
          onCardHeadingClick = {() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
