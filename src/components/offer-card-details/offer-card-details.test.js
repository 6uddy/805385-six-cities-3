import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router-dom";
import OfferDetailCard from "./offer-card-details.jsx";
import {Provider} from "react-redux";
import {NameSpace} from "../../reducers/name-space";
import {InitValue} from "../../reducers/cards-sorting-menu/cards-sorting-menu";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import createAPI from "../../api";
import thunk from 'redux-thunk';

const cards = [
  {
    id: 0,
    city: {
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
      name: `Paris`,
    },
    previewImage: `/img/apartment-01.jpg`,
    images: [`/img/apartment-01.jpg`, `/img/room.jpg`],
    title: `Canal View Prinsengracht`,
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    type: `house`,
    bedrooms: 3,
    maxAdults: 8,
    price: 573,
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    goods: [`Air conditioning`, `Breakfast`, `Towels`, `Baby seat`, `Washer`, `Washing machine`, `Dishwasher`, `Dishwasher`, `Coffee machine`, `Laptop friendly workspace`, `Fridge`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `/img/avatar-angelina.jpg`,
    },
    location: {
      latitude: 48.837610000000005,
      longitude: 2.364499,
      zoom: 16,
    },
  },
  {
    id: 1,
    city: {
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
      name: `Paris`,
    },
    previewImage: `/img/apartment-01.jpg`,
    images: [`/img/apartment-01.jpg`, `/img/room.jpg`],
    title: `Canal View Prinsengracht`,
    isFavorite: false,
    isPremium: false,
    rating: 2.8,
    type: `hotel`,
    bedrooms: 3,
    maxAdults: 4,
    price: 337,
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    goods: [`Air conditioning`, `Breakfast`, `Baby seat`, `Washer`, `Dishwasher`, `Dishwasher`, `Coffee machine`, `Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `/img/avatar-angelina.jpg`,
    },
    location: {
      latitude: 50.842557,
      longitude: 4.3536969999999995,
      zoom: 16,
    },
  },
];

const api = createAPI(() => {});

const middleWare = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middleWare);

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

it(`Test OfferDetailCard component`, () => {
  const apiMock = new MockAdapter(api);

  apiMock
    .onGet(`/comments/0`)
    .reply(200, reviews);

  apiMock
    .onGet(`/hotels/0/nearby`)
    .reply(200, cards);

  const store = mockStore({
    [NameSpace.CARDS]: {
      cards
    },
    [NameSpace.USER]: {
      userAuthorized: false,
      userInfo: {
        id: 1,
        name: `Oliver.conner`,
        email: `Oliver.conner@gmail.com`,
        avatarUrl: `/img/1.png`,
        isPro: false
      },
    },
    [NameSpace.CITY_SELECT]: {
      cityName: 0
    },
    [NameSpace.CARD_SELECT]: {
      cardId: 0
    },
    [NameSpace.CARDS_SORTING_MENU]: {
      sortingMethodId: InitValue.INITIAL_SORTING_METHOD_ID,
      menuState: InitValue.INITIAL_MENU_STATE
    },
    [NameSpace.REVIEWS]: {
      reviews
    },
    [NameSpace.SIMILAR_OFFERS]: {
      similarOffers: [cards[1]]
    },
  });

  const tree = renderer
    .create(
        <MemoryRouter initialEntries={[`/offer/0`]}>
          <Provider store={store}>
            <OfferDetailCard />
          </Provider>
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
