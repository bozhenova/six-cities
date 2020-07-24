export const parseDate = date => {
  const options = { month: 'long', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

export const updateItemsList = (items, newItem) => {
  return items.map(item => {
    return item.id === newItem.id ? newItem : item;
  });
};

export const findItemById = (id, items) => items.find(item => item.id === id);
