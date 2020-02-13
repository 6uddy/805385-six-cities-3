import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';


const Settings = {
  OFFERS: 5,
  OFFERS_NAMES: [`Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`]
};

ReactDOM.render(
    <App
      offersAmount={Settings.OFFERS}
      offersNames={Settings.OFFERS_NAMES}
    />,
    document.querySelector(`#root`)
);
