import createMock from "../__mocks__/localStorageMock";

let out = []
describe("TEST createList", () => {
let arr = [{ value: "One", checked: true, index: 0 }];

  test("test function", () => {
  let first = createMock("One", true, out);
  expect(first).toEqual(arr);
  });

  test("should ", () => {
    let second = createMock("two", false, out);
    arr.push({ value: "two", checked: false, index: 1 });

    expect(second).toEqual(arr);
  });
});
