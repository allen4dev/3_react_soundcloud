function arrayToObject(arr) {
  return arr.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: item,
    }),
    {},
  );
}

function cleanSearch(query) {
  const cleaned = query.replace('?q=', '');
  return cleaned;
}

export default {
  arrayToObject,
  cleanSearch,
};
