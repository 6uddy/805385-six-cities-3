import React from 'react';
import renderer from 'react-test-renderer';
import OffersSortItem from "./offers-sort-item.jsx";

it(`Test OffersSortItem component`, () => {
  const tree = renderer
    .create(
        <OffersSortItem
          sortingMethod={0}
          selectedSortingMethod={0}
          setSortingMethod={() =>{}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
