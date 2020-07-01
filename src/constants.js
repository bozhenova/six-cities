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
  BASE_URL: `https://es31-server.appspot.com/six-cities`,
  HOTEL_PATH: `/hotels`,
  ACCESS_DENIED: 403,
  STATUS_OK: 200,
  TIMEOUT: 5000,
  MAX_RATING: 5
};
