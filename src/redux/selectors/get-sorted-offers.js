const getSortedOffers = state => {
  const offers = state.offers.filter(offer => offer.city === state.city);
  switch (state.sortType) {
    case `popular`:
      return sortByPopular(offers);
    case `to-high`:
      return sortByPriceLowToHigh(offers);
    case `to-low`:
      return sortByPriceHighToLow(offers);
    case `top-rated`:
      return sortByRating(offers);
    default:
      break;
  }
};
export default getSortedOffers;

const sortByPopular = offers => offers;

const sortByPriceLowToHigh = offers =>
  [...offers].sort((a, b) => {
    return a.price - b.price;
  });

const sortByPriceHighToLow = offers =>
  [...offers].sort((a, b) => {
    return b.price - a.price;
  });

const sortByRating = offers =>
  [...offers].sort((a, b) => {
    return b.rating - a.rating;
  });
