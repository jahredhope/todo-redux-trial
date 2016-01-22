export default (arr) => {
  return arr
  .map((item) => item.uniqueIndex)
  .reduce((prevIndex, index) =>
    index > prevIndex
      ? index
      : prevIndex
    , 0)
  + 1;
};
