import Checked from './completed.js';
import Store from './store.js';
import menu from './menu.svg';
import deleteList from './deleteList.js';
import { count, collection } from './export.js';

const todoList = document.querySelector('.todo-list');

const store = new Store();
/* eslint-disable import/no-mutable-exports */

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
    const menuToggle = document.createElement('img');
    const deleteToggle = document.createElement('img');

    checkBox.checked = this.isChecked;

    if (checkBox.checked) {
      item.style.textDecoration = 'line-through';
    }

    item.type = 'text';
    checkBox.type = 'checkbox';
    menuToggle.src = menu;

    list.classList.add('list');
    item.classList.add('item');
    menuToggle.classList.add('more');
    deleteToggle.classList.add('delete')
    deleteToggle.style.display = 'none'
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

    item.addEventListener('keydown',(event) => {
      let get = JSON.parse(localStorage.getItem('data'));

      if(event.key === 'Enter') {
        get.forEach(element => {
          if(element.index === collective.index) {
            element.chars = item.value;
          }
          item.disabled = true
          list.style.backgroundColor = '#fff'
          deleteToggle.style.display = 'none'
          menuToggle.style.display = 'block'
          menuToggle.classList.remove('delete');
          menuToggle.classList.add('more')
          localStorage.setItem('data', JSON.stringify(get))
        });
      }
     
    })

    menuToggle.addEventListener('click', () => {
      deleteList(list, item, menuToggle, deleteToggle, collective.index);
    });

    list.appendChild(checkBox);
    list.appendChild(item);
    list.appendChild(menuToggle);
    list.appendChild(deleteToggle)
    todoList.appendChild(list);
    collection.push(collective);

    store.add(collection);
  }
}

export default CreateList;
