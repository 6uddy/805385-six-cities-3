import React from 'react';
import renderer from 'react-test-renderer';
import {OffersCardList} from './offer-card-list.jsx';

const TestData = {
  OFFERS: [
    {
      name: `Canal View Prinsengracht`,
      coordinates: [],
      id: 1,
      price: 100,
      type: `Hotel room`,
      premium: false,
      isFavorites: true,
      rating: 3.7,
      reviews: []
    },
    {
      name: `Nice, cozy, warm big bed apartment`,
      coordinates: [],
      id: 2,
      price: 170,
      type: `Lux apartment`,
      premium: true,
      isFavorites: true,
      rating: 2.7,
      reviews: []
    }
  ]
};

it(`OffersCardList component structure test`, () => {
  const tree = renderer
    .create(
        <OffersCardList
          offers = {TestData.OFFERS}
          onCardHeadingClick = {() => {}}
          sortedOffers = {TestData.OFFERS}
          onOfferMouseInteract = {() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
