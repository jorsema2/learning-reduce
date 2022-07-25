const map = require("./map");

describe("map", () => {
  test("returns an array", () => {
    const newArray = map([], () => {});

    expect(Array.isArray(newArray)).toBe(true);
  });

  test("returns an array that doubles every item if we pass a function to double them", () => {
    const double = (num) => (num *= 2);

    const newArray = map([1, 2, 3], double);

    expect(newArray).toStrictEqual([2, 4, 6]);
  });

  test("returns an array that triples every number if we pass a function to double them", () => {
    const triple = (num) => (num *= 3);

    const newArray = map([1, 2, 3], triple);

    expect(newArray).toStrictEqual([3, 6, 9]);
  });

  test("returns an array of objects with a new property", () => {
    const addCountryName = (countryName) => {
      return (el) => ({
        ...el,
        countryName: countryName,
      });
    };

    const newArray = map(
      [{ name: "Ben" }, { name: "Joe" }, { name: "Susan" }],
      addCountryName("United States")
    );

    expect(newArray).toStrictEqual([
      { name: "Ben", countryName: "United States" },
      { name: "Joe", countryName: "United States" },
      { name: "Susan", countryName: "United States" },
    ]);
  });
});
