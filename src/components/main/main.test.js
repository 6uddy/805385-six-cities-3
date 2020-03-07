import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from "./main.jsx";

const Settings = {
  OFFERS: 5,
  OFFERS_NAMES: [`Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`],
  COORDINATES: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198]
  ]
};

it(`Render main`, () => {
  const tree = renderer
    .create(
        <Main
          offersAmount={Settings.OFFERS}
          offersNames={Settings.OFFERS_NAMES}
          onCardHeadingClick = {() => {}}
          offerCoords={Settings.COORDINATES}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
