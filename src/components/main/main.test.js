import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer/reducer.js';

const store = createStore(reducer, (f) => f);
const TestData = {
  OFFERS: [
    {
      name: `Prinsengracht`,
      coordinates: [],
      id: 1,
      price: 74,
      type: `Hotel`,
      premium: true,
      isFavorites: true,
      rating: 4.7,
      reviews: []
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
      reviews: []
    }
  ]
};
const SELECTED_CITY = `Cologne`;
const OFFERS_SORT_TYPE = `Price: low to high`;

it(`Main component structure test`, () => {
  const tree = renderer
    .create(
        <Provider store = {store}>
          <Main
            offers = {TestData.OFFERS}
            selectedCity = {SELECTED_CITY}
            onCityTabClick = {() => {}}
            offersSortType = {OFFERS_SORT_TYPE}
            onSortOptionClick = {() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
