export default (arr) => {
  return arr
  .map((item) => item.uniqueIndex)
  .reduce((index, prevIndex) => index > prevIndex ? index : prevIndex, 0);
};
