const d3 = require('d3')

describe("index", () => {

  it("gets min", () => {
    const data = [1,2,3,3,4,2,34,234,23,42,3,23,4,23,4,465,67];
    const result = d3.min(data)
    expect(result).toEqual(1)
  });

});
