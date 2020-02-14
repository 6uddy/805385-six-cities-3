import React from 'react';
import Enzume, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main.jsx';

const Settings = {
  OFFERS: 5,
  OFFERS_NAMES: [`Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`]
};

Enzume.configure({
  adapter: new Adapter()
});

it(`Main component e2e test`, () => {
  const headingHandler = jest.fn();
  const main = shallow(
      <Main
        offersAmount={Settings.OFFERS}
        offersNames={Settings.OFFERS_NAMES}
        headingHandler={headingHandler}
      />
  );
  const headingLvlOne = main.find(`h1`);
  const headingLvlSecond = main.find(`h2`);

  headingLvlOne.simulate(`click`, headingHandler);
  headingLvlSecond.simulate(`click`, headingHandler);

  expect(headingHandler.mock.calls.length).toBe(2);
});
