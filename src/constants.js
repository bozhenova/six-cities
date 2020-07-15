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
  ACCESS_DENIED: 401,
  STATUS_OK: 200,
  TIMEOUT: 5000,
  AMOUNT_PHOTOS: 6,
  MIN_TEXT_LENGTH: 25,
  MIN_PASSWORD_LENGTH: 5,
  AMOUNT_COMMENTS: 10,
  MAX_TEXT_LENGTH: 300,
  MAX_RATING: 5,
  ERROR_MESSAGE: `Something is wrong. Try later.`
};

export const KeyCodes = {
  ENTER: 'Enter',
  ESCAPE: 'Escape'
};

export const SortOptions = [
  {
    name: `Popular`,
    value: `popular`,
    selected: true
  },
  {
    name: `Price: low to high`,
    value: `to-high`,
    selected: false
  },
  {
    name: `Price: high to low`,
    value: `to-low`,
    selected: false
  },
  {
    name: `Top rated first`,
    value: `top-rated`,
    selected: false
  }
];
