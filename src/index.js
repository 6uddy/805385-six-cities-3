import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";


const Settings = {
  OFFERS: 312
};

ReactDOM.render(
  <App
    offers={Settings.OFFERS}
  />,
  document.querySelector(`#root`)
);
