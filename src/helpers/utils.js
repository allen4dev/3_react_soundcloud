function arrayToObject(arr) {
  return arr.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: item,
    }),
    {},
  );
}

export default {
  arrayToObject,
};
