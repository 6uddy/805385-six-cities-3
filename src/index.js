import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {Settings} from './mocks/offers.js';

ReactDOM.render(
    <App
      offersAmount={Settings.OFFERS}
      offersNames={Settings.OFFERS_NAMES}
      offerCoords = {Settings.COORDINATES}
    />,
    document.querySelector(`#root`)
);
