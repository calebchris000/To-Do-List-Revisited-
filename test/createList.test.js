import create from "../src/localStorage";

let arr = [{ value: "One", checked: true, index: 0 }];

describe("TEST createList", () => {
  let first = create("One", true);
  test("test function", () => {
    expect(first).toEqual(arr);
  });

  test("should ", () => {
    let second = create("two", false);
    arr.push({ value: "two", checked: false, index: 1 });

    expect(second).toEqual(arr);
  });
});
