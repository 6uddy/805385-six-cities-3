import React from 'react';
import renderer from 'react-test-renderer';
import {OfferCard} from "./offer-card.jsx";

const offerName = `Beautiful &amp; luxurious apartment at great location`;

it(`Render card`, () => {

  const tree = renderer
    .create(
        <OfferCard
          offerName={offerName}
          onOfferMouseInteract = {() => {}}
          onCardHeadingClick = {() => {}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
