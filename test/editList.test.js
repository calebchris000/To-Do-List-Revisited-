import editList from '../__mocks__/editListMock.js';

describe('Checks that a list is edited', () => {
  test('check if value is replaced #1', () => {
    const arr = [{ value: 'One', checked: true, index: 0 }];
    const data = { index: 0 };
    const replacedtext = 'numberOne';

    expect(editList(arr, replacedtext, data)).toEqual([
      { value: 'numberOne', checked: true, index: 0 },
    ]);
  });

  test('check if value is replaced #2', () => {
    const arr = [{ value: 'Two', checked: true, index: 1 }];
    const data = { index: 1 };
    const replacedtext = 'numberTwo';

    expect(editList(arr, replacedtext, data)).toEqual([
      { value: 'numberTwo', checked: true, index: 1 },
    ]);
  });
});
