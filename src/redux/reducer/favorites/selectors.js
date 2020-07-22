export const getFavorites = state => state.favorites.favorites;

export const groupFavoritesByCities = state => {
  const favorites = getFavorites(state);
  const group = {};

  if (favorites.length) {
    const citiesKeys = [...new Set([...favorites.map(item => item.city.name)])];

    citiesKeys.forEach(item => {
      group[item] = [];
    });
    favorites.forEach(item => {
      group[item.city.name].push(item);
    });
  }
  return group;
};
