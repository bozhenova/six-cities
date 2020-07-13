export const getFavorites = state => state.favorites.favorites;

export const groupFavoritesByCities = state => {
  const favorites = getFavorites(state);

  if (!favorites.length) {
    return false;
  }
  const citiesKeys = [...new Set([...favorites.map(item => item.city.name)])];
  const group = {};

  citiesKeys.forEach(item => {
    group[item] = [];
  });
  favorites.forEach(item => {
    group[item.city.name].push(item);
  });

  return group;
};
