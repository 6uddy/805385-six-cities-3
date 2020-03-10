import React from 'react';
import renderer from 'react-test-renderer';
import {Offers} from './offers.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer/reducer.js';

const store = createStore(reducer, (f) => f);
const TestData = {
  OFFERS: [
    {
      name: `Apartment overlooking the river`,
      coordinates: [],
      id: 1,
      price: 200,
      type: `Apartment`,
      premium: true,
      isFavorites: true,
      rating: 4.7,
      reviews: []
    },
    {
      name: `Room in the city center`,
      coordinates: [],
      id: 2,
      price: 170,
      type: `Hotel room`,
      premium: true,
      isFavorites: false,
      rating: 4,
      reviews: []
    }
  ]
};
const OFFERS_SORT_TYPE = `Price: low to high`;
const SELECTED_CITY = `Cologne`;

it(`Offers component structure test`, () => {
  const tree = renderer
    .create(
        <Provider store = {store}>
          <Offers
            offers = {TestData.OFFERS}
            offersSortType = {OFFERS_SORT_TYPE}
            onSortOptionClick = {() => {}}
            selectedCity = {SELECTED_CITY}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
