import createMock from '../__mocks__/localStorageMock.js';

const out = [];
describe('TEST createList', () => {
  const arr = [{ value: 'One', checked: true, index: 0 }];

  test('test function', () => {
    const first = createMock('One', true, out);
    expect(first).toEqual(arr);
  });

  test('should ', () => {
    const second = createMock('two', false, out);
    arr.push({ value: 'two', checked: false, index: 1 });

    expect(second).toEqual(arr);
  });
});
