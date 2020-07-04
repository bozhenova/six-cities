export const CITIES = new Map([
  ['Amsterdam', [52.370216, 4.895168]],
  ['Paris', [48.856613, 2.352222]],
  ['Cologne', [50.937531, 6.960279]],
  ['Brussels', [50.850346, 4.351721]],
  ['Hamburg', [53.551086, 9.993682]],
  ['Dusseldorf', [51.227741, 6.773456]]
]);

export const Constants = {
  CITIES: [
    'Amsterdam',
    'Paris',
    'Cologne',
    'Brussels',
    'Hamburg',
    'Dusseldorf'
  ],
  DEFAULT_CITY: 'Amsterdam',
  BASE_URL: `https://htmlacademy-react-3.appspot.com/six-cities`,
  HOTEL_PATH: `/hotels`,
  NEARBY_PATH: `/nearby`,
  LOGIN_PATH: `/login`,
  COMMENTS_PATH: `/comments`,
  FAVORITE_PATH: `/favorite`,
  ACCESS_DENIED: 403,
  STATUS_OK: 200,
  TIMEOUT: 1000 * 5,
  AMOUNT_PHOTOS: 6,
  AMOUNT_NEARBY_OFFERS: 3,
  MAX_SHOWN_REVIEWS: 10,
  MAX_RATING: 5,
  ERROR_MESSAGE: `Something is wrong. Try later.`
};
