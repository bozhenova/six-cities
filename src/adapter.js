export const adaptOffer = offer => {
  return {
    bedrooms: offer[`bedrooms`],
    city: {
      coords: [
        offer[`city`][`location`][`latitude`],
        offer[`city`][`location`][`longitude`]
      ],
      zoom: offer[`city`][`location`][`zoom`],
      name: offer[`city`][`name`]
    },
    description: offer[`description`],
    goods: [...offer[`goods`]],
    host: {
      avatar: offer[`host`][`avatar_url`],
      id: offer[`host`][`id`],
      name: offer[`host`][`name`],
      isPro: offer[`host`][`is_pro`]
    },
    id: offer[`id`],
    images: [...offer[`images`]],
    isFavorite: offer[`is_favorite`],
    isPremium: offer[`is_premium`],
    maxAdults: offer[`max_adults`],
    place: {
      coords: [offer[`location`][`latitude`], offer[`location`][`longitude`]],
      zoom: offer[`location`][`zoom`]
    },
    previewPhoto: offer[`preview_image`],
    price: offer[`price`],
    rating: offer[`rating`],
    title: offer[`title`],
    type: offer[`type`]
  };
};

export const adaptOffers = offers => offers.map(adaptOffer);

export const adaptComments = comments =>
  comments.map(comment => ({
    comment: comment[`comment`],
    date: comment[`date`],
    id: comment[`id`],
    rating: comment[`rating`],
    user: {
      avatarUrl: comment[`user`][`avatar_url`],
      id: comment[`user`][`id`],
      isPro: comment[`user`][`is_pro`],
      name: comment[`user`][`name`]
    }
  }));

export const adaptLoginResponse = userData => ({
  avatarUrl: userData[`avatar_url`],
  email: userData[`email`],
  id: userData[`id`],
  isPro: userData[`is_pro`],
  name: userData[`name`]
});
