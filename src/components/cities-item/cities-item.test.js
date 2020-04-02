import React from 'react';
import renderer from 'react-test-renderer';
import MemorizedCitiesItem from "./cities-item.jsx";

const CITY_ID = 0;

it(`Test MemorizedCitiesItem component`, () => {
  const tree = renderer
    .create(
        <MemorizedCitiesItem
          city = {`Paris`}
          setSelectedCity = {() => {}}
          cityId = {CITY_ID}
          selectedCityId = {CITY_ID}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
