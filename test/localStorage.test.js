import createMock from '../__mocks__/localStorageMock.js';
import deleteList from '../__mocks__/deleteList.js';
import clear from '../__mocks__/clearMock.js';

describe('Testing the Local Storage', () => {
  test('Should update the output variable', () => {
    const output = [];
    const stringToChange = 'Willy Wonka';
    const booleanToChange = 'false';

    expect(createMock(stringToChange, booleanToChange, output)).toEqual(output);
  });

  test('Should update the local storage', () => {
    const LocalStorage = JSON.parse(localStorage.getItem('data'));
    const stringToChange = 'Japan is awesome!';
    const booleanToChange = 'true';
    const output = [];

    expect(createMock(stringToChange, booleanToChange, output)).not.toEqual(
      LocalStorage,
    );
  });

  test('Should delete an item in local storage', () => {
    const LocalStorage = [
      { value: 'hello', checked: false, index: 0 },
      { value: 'how', checked: false, index: 1 },
    ];
    const test = [{ value: 'hello', checked: false, index: 0 }];

    expect(deleteList(LocalStorage, 1)).toEqual(test);
  });

  test('Should empty the array', () => {
    const LocalStorage = [{ value: 'hello', checked: false, index: 0 }];
    const test = [];

    expect(deleteList(LocalStorage, 0)).toEqual(test);
  });

  test('Should clear the list that are truthy', () => {
    const LocalStorage = [
      { value: 'hello', checked: false, index: 0 },
      { value: 'how', checked: true, index: 1 },
      { value: 'are', checked: true, index: 2 },
      { value: 'you', checked: false, index: 3 },
    ];
    const test = [{ value: 'hello', checked: false, index: 0 }, { value: 'you', checked: false, index: 1 }];

    expect(clear(LocalStorage)).toEqual(test);
  });
});
