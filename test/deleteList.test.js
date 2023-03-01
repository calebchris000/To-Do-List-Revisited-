import deleteList from "../__mocks__/deleteList";

describe("Checks that a list is deleted", () => {
  let arr = [
    { value: "one", checked: false, index: 0 },
    { value: "two", checked: false, index: 1 },
  ];

  test("delete last item", () => {
    expect(deleteList(arr, arr[1].index)).toEqual([
      { value: "one", checked: false, index: 0 },
    ]);
  });

  test("delete first item", () => {
    expect(deleteList(arr, arr[0].index)).toEqual([]);
  });
});
