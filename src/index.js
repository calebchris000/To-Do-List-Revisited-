import createList from './createList.js';
import create from './localStorage.js';
import './index.scss';

const todoList = document.querySelector('.todo-list');
const input = document.getElementById('input');
const clearButton = document.querySelector('.clear');

let output = [];

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    create(input.value, false, output);
    createList();
    input.value = '';
  }
});

//* Delete a selected list

export const deleteList = (list, deleteToggle, index) => {
  output = []
  deleteToggle.addEventListener('click', () => {
    todoList.removeChild(list);

    const data = JSON.parse(localStorage.getItem('data'));

    data.forEach((element) => {
      if (element.index === index) {
        data.splice(index, 1);
      }
    });
    data.forEach((item, index) => {
      item.index = index;
      output.push(item)
    });

    localStorage.setItem('data', JSON.stringify(data));

    createList();
  });

  list.style.backgroundColor = '#FFFEC3';
};


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

  fromLocal.forEach((item) => {
    output.push(item);
    createList();
  });
};

window.onload = restoreItems();
