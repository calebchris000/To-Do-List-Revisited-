import createList from './createList.js';
import create from './localStorage.js';
import './index.scss';

const input = document.getElementById('input');
const clearButton = document.querySelector('.clear');

let output = [];

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    output = [];
    const getty = JSON.parse(localStorage.getItem('data'));
    if (getty !== null) {
      getty.map((x) => output.push(x));
    }

    create(input.value, false, output);
    createList();
    input.value = '';
  }
});

const clear = () => {
  output = [];
  const arr = [];
  const fromLocal = JSON.parse(localStorage.getItem('data'));
  fromLocal.forEach((item) => {
    if (!item.checked) {
      arr.push(item);
      output.push(item);
    }
  });

  arr.forEach((item, index) => {
    item.index = index;
  });

  localStorage.setItem('data', JSON.stringify(arr));

  createList();
};

clearButton.addEventListener('click', clear);

const restoreItems = () => {
  const fromLocal = JSON.parse(localStorage.getItem('data'));

  if (fromLocal === null) {
    return;
  }
  fromLocal.forEach((item) => {
    output.push(item);
    createList();
  });
};

window.onload = restoreItems();
