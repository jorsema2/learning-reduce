const map = (initialArray, fn) => {
  let newArray = [];

  for (let i = 0; i < initialArray.length; i++) {
    newArray.push(fn(initialArray[i]));
  }

  return newArray;
};

module.exports = map;
