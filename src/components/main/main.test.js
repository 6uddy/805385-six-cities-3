import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from "./main.jsx";

const Settings = {
  OFFERS: 5,
  OFFERS_NAMES: [`Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`]
};

it(`Render main`, () => {
  const tree = renderer
    .create(
        <Main
          offersAmount={Settings.OFFERS}
          offersNames={Settings.OFFERS_NAMES}
          onCardHeadingClick = {() => {}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
