export const offersFromRequest = [
  JSON.parse(`{
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": "Amsterdam"
  },
  "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  "host": {
    "avatar_url": "img/1.png",
    "id": 3,
    "is_pro": true,
    "name": "Angelina"
  },
  "id": 1,
  "images": ["img/1.png", "img/2.png"],
  "is_favorite": false,
  "is_premium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "preview_image": "img/1.png",
  "price": 120,
  "rating": 4.8,
  "title": "Beautiful & luxurious studio at great location",
  "type": "apartment"
}`)
];

export const reviewsFromRequest = [
  JSON.parse(`{
  "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  "date": "2019-05-08T14:13:56.569Z",
  "id": 1,
  "rating": 4,
  "user": {
    "avatar_url": "img/1.png",
    "id": 4,
    "is_pro": false,
    "name": "Max"
  }
}`)
];

export const loginDataFromRequest = [
  JSON.parse(`{
    "avatar_url": "img/1.png",
    "id": 4,
    "is_pro": false,
    "name": "Max"
}`)
];

export const offers = [
  {
    id: 423324,
    city: `Amsterdam`,
    title: `Nice, cozy, warm big bed apartment`,
    previewPhoto: `img/apartment-03.jpg`,
    isPremium: false,
    isFavorite: false,
    price: 180,
    type: `Apartment`,
    rating: 80,
    coordinates: [52.3809553943508, 4.939309666406198]
  },
  {
    id: 4224,
    city: `Amsterdam`,
    title: `Beautiful & luxurious apartment at great location`,
    previewPhoto: `img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: false,
    price: 120,
    type: `Apartment`,
    rating: 93,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 42334224,
    city: `Amsterdam`,
    title: `Wood and stone place`,
    previewPhoto: `img/room.jpg`,
    isPremium: false,
    isFavorite: true,
    price: 80,
    type: `Private room`,
    rating: 80,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    id: 4233924,
    city: `Brussels`,
    title: `Canal View Prinsengracht`,
    previewPhoto: `img/apartment-02.jpg`,
    isPremium: false,
    isFavorite: true,
    price: 132,
    type: `Apartment`,
    rating: 80,
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4230324,
    city: `Paris`,
    title: `Beautiful & luxurious apartment at great location`,
    previewPhoto: `img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: true,
    price: 120,
    type: `Apartment`,
    rating: 93,
    coordinates: [48.86679, 2.37852]
  },
  {
    id: 42317324,
    city: `Cologne`,
    title: `Wood and stone place`,
    previewPhoto: `img/room.jpg`,
    isPremium: false,
    isFavorite: true,
    price: 80,
    type: `Private room`,
    rating: 80,
    coordinates: [50.958694, 6.961092]
  },
  {
    id: 4233290,
    city: `Hamburg`,
    title: `Canal View Prinsengracht`,
    previewPhoto: `img/apartment-02.jpg`,
    isPremium: false,
    isFavorite: false,
    price: 132,
    type: `Apartment`,
    rating: 80,
    coordinates: [53.598154, 10.062009]
  },
  {
    id: 423487324,
    city: `Dusseldorf`,
    title: `Nice, cozy, warm big bed apartment`,
    previewPhoto: `img/apartment-03.jpg`,
    isPremium: false,
    isFavorite: false,
    price: 180,
    type: `Apartment`,
    rating: 80,
    coordinates: [51.261306, 6.804574]
  }
];
