import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from "./card.jsx";

const offerName = `Beautiful &amp; luxurious apartment at great location`;

it(`Render card`, () => {
  const onNameClick = jest.fn();

  const tree = renderer
    .create(
        <Card
          offerName={offerName}
          onNameClick={onNameClick}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
