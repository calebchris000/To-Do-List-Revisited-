import editList from "../__mocks__/editListMock"

describe("Checks that a list is edited", () => {
  
  test("check if value is replaced #1", () => {
    let arr = [{ value: "One", checked: true, index: 0 }];
    let data = {index: 0}
    let replacedtext = "numberOne";

    expect(editList(arr, replacedtext, data)).toEqual([
      { value: "numberOne", checked: true, index: 0 },
    ]);
  });

  test("check if value is replaced #2", () => {
    let arr = [{ value: "Two", checked: true, index: 1 }];
    let data = {index: 1}
    let replacedtext = "numberTwo";

    expect(editList(arr, replacedtext, data)).toEqual([
      { value: "numberTwo", checked: true, index: 1 },
    ]);
  });
});
