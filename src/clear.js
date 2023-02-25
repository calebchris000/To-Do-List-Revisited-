/* eslint-disable no-unused-vars */

import CreateList from './createList.js';
import { count, collection } from './export.js';

const todoList = document.querySelector('.todo-list');

collection = [];
const clear = () => {
  todoList.innerHTML = '';
  count = 0;
  collection = [];
  const fromLocal = JSON.parse(localStorage.getItem('data'));
  const output = [];
  fromLocal.forEach((item) => {
    if (!item.isChecked) {
      output.push(item);

      new CreateList().create(item.chars, item.isChecked);
    }
  });

  localStorage.setItem('data', JSON.stringify(output));
};

export default clear;