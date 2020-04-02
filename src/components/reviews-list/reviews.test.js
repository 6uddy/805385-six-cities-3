import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from "./reviews.jsx";
import configureMockStore from "redux-mock-store";
import {NameSpace} from "../../reducers/name-space";
import {Provider} from "react-redux";
import MockAdapter from "axios-mock-adapter";
import createAPI from "../../api";
import thunk from 'redux-thunk';

const reviews = [
  {
    id: 0,
    comment: `The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.`,
    date: new Date(2020, 1, 1, 0, 0, 0, 0).toISOString(),
    rating: 3.5,
    user: {
      id: 0,
      name: `Max`,
      avatarUrl: `/img/avatar-max.jpg`,
      isPro: true
    },
  },
  {
    id: 1,
    comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
    date: new Date(2020, 0, 2, 0, 0, 0, 0).toISOString(),
    rating: 2.5,
    user: {
      id: 1,
      name: `Kenadall`,
      avatarUrl: `/img/avatar.svg`,
      isPro: true
    },
  }
];

const api = createAPI(() => {});

const middleWare = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middleWare);

it(`Render Reviews component`, () => {
  const apiMock = new MockAdapter(api);

  apiMock
    .onGet(`/comments/0`)
    .reply(200, reviews);


  const store = mockStore({
    [NameSpace.REVIEWS]: {
      reviews
    },
    [NameSpace.USER]: {
      userAuthorized: false
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Reviews cardId={0} />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
