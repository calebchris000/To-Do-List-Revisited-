import Checked from './completed.js';
import Store from './store.js';
import menu from './menu.svg';
import deleteList from './deleteList.js';

const todoList = document.querySelector('.todo-list');

const store = new Store();
/* eslint-disable import/no-mutable-exports */
export let count = 0;
export const collection = [];

class CreateList {
  create(input, isChecked) {
    this.input = input;
    this.isChecked = isChecked;
    const collective = { chars: '', isChecked, index: 0 };

    collective.chars = this.input;
    collective.index = count;

    count += 1;

    const list = document.createElement('div');
    const checkBox = document.createElement('input');
    const item = document.createElement('input');
    const deleteButton = document.createElement('img');

    checkBox.checked = this.isChecked;

    if (checkBox.checked) {
      item.style.textDecoration = 'line-through';
    }

    item.type = 'text';
    checkBox.type = 'checkbox';
    deleteButton.src = menu;

    list.classList.add('list');
    item.classList.add('item');
    deleteButton.classList.add('more');
    checkBox.classList.add('checkBox');

    item.disabled = true;
    const checked = new Checked(checkBox, item, list);

    item.value = collective.chars;
    checkBox.addEventListener('change', () => {
      if (checkBox.checked) {
        checked.cross(collective.index, isChecked);
      } else {
        checked.uncross(collective.index, isChecked);
      }
    });

    deleteButton.addEventListener('click', () => {
      deleteList(list, item, deleteButton);
    });

    list.appendChild(checkBox);
    list.appendChild(item);
    list.appendChild(deleteButton);
    todoList.appendChild(list);
    collection.push(collective);

    store.add(collection);
  }
}

export default CreateList;
