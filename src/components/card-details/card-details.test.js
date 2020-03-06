import React from 'react';
import renderer from 'react-test-renderer';
import {CardDetails} from './card-details.jsx';

const OFFER_NAME = `Party apartment`;

it(`CardDetails component structure test`, () => {
  const tree = renderer
  .create(
      <CardDetails
        offerName = {OFFER_NAME}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
