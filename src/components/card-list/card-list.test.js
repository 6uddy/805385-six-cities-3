import React from 'react';
import renderer from 'react-test-renderer';
import {CardList} from './card-list.jsx';

const OFFERS_NAMES = [`Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`];

it(`CardList component structure test`, () => {
  const tree = renderer
  .create(
      <CardList
        offersNames={OFFERS_NAMES}
        onCardHeadingClick = {() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
