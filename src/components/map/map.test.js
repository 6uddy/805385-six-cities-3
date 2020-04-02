import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./map.jsx";

const ACTIVE_OFFER = 0;
const MAP_CLASS_NAME = `cities__map`;

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

it(`Test Map component`, () => {
  const tree = renderer
    .create(
        <Map
          cards={cards}
          similarOffers={[cards[1]]}
          selectedCardId = {ACTIVE_OFFER}
          sectionClassName = {MAP_CLASS_NAME}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
