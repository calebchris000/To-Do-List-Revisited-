import clear from '../__mocks__/clearMock.js';

describe('Checks that it clears all truthy array', () => {
  const arr = [
    { value: 'one', checked: false, index: 0 },
    { value: 'two', checked: false, index: 1 },
  ];

  test('Remove all truthy object', () => {
    expect(clear(arr)).toEqual(arr);
  });

  test('Remove all truthy object', () => {
    arr[0].checked = true;

    expect(clear(arr)).toEqual([{ value: 'two', checked: false, index: 0 }]);
  });
});
