import React from 'react';
import Enzume, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './card.jsx';

const OFFER_NAME = `Residence`;

Enzume.configure({
  adapter: new Adapter()
});

it(`Card component e2e test`, () => {
  const handleMouseEnter = jest.fn();
  const handleHeadingHandler = jest.fn();
  const card = shallow(
      <Card
        offerName = {OFFER_NAME}
        onOfferMouseInteract = {handleMouseEnter}
        onCardHeadingClick = {handleHeadingHandler}
      />
  );
  const cardHeading = card.find(`.place-card__name`);
  card.simulate(`mouseenter`);
  card.simulate(`mouseleave`);
  cardHeading.simulate(`click`);
  expect(handleMouseEnter.mock.calls[0][0]).toBe(OFFER_NAME);
  expect(handleMouseEnter.mock.calls[1][0]).toBe(null);
  expect(handleMouseEnter.mock.calls.length).toBe(2);
  expect(handleHeadingHandler.mock.calls.length).toBe(1);
});

