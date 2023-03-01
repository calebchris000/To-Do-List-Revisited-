import createList from './createList.js';
import { clear } from './createList.js';
import './index.scss';

const input = document.getElementById('input');
const clearButton = document.querySelector('.clear');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
   createList(input.value, false);
    input.value = '';
  }
});



clearButton.addEventListener('click', clear);

const restoreItems = () => {
  const fromLocal = JSON.parse(localStorage.getItem('data'));

  fromLocal.forEach((item) => {
    createList(item.chars, item.checked);
  });
};

window.onload = restoreItems();