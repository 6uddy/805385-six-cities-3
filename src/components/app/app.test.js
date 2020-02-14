import React from 'react';
import renderer from 'react-test-renderer';
import {App} from "./app.jsx";


const Settings = {
  OFFERS: 5,
  OFFERS_NAMES: [`Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`]
};


it(`Render app`, () => {
  const tree = renderer
    .create(<App
      offersAmount={Settings.OFFERS}
      offersNames={Settings.OFFERS_NAMES}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
