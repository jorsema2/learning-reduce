const map = (initialArray, fn) => {
  let newArray = JSON.parse(JSON.stringify(initialArray));

  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = fn(newArray[i]);
  }

  return newArray;
};

module.exports = map;
