import React from 'react';
import renderer from 'react-test-renderer';
import {MemorizedOfferCard} from "./offer-card.jsx";

const card = {
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
};

it(`Test MemorizedOfferCard card`, () => {

  const tree = renderer
    .create(
        <MemorizedOfferCard
          card={card}
          setSelectedCard={()=>{}}
          isDetail={false}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
