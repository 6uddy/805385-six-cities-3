import React from 'react';
import renderer from 'react-test-renderer';
import {OfferCardDetails} from './offer-card-details.jsx';

const OFFER_NAME = `Party apartment`;

it(`CardDetails component structure test`, () => {
  const tree = renderer
  .create(
      <OfferCardDetails
        offerName = {OFFER_NAME}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
