import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from "./card.jsx";

const offerName = `Beautiful &amp; luxurious apartment at great location`;

it(`Render card`, () => {

  const tree = renderer
    .create(
        <Card
          offerName={offerName}
          onUpdateState = {() => {}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
