import Delete from './delete.svg';

/* eslint-disable no-unused-vars */
import { count, collection } from './export.js';

const todoList = document.querySelector('.todo-list');

const deleteList = (list, item, deleteButton, index) => {
  item.disabled = false;
  deleteButton.src = Delete;
  deleteButton.classList.add('delete');

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(list);

    collection.forEach((element) => {
      if (element.index === index) {
        collection.splice(index, 1);
      }
    });
    count = collection.length;

    collection.forEach((element, index) => {
      element.index = index;
    });

    localStorage.setItem('data', JSON.stringify(collection));
  });

  list.style.backgroundColor = '#FFFEC3';
};

export default deleteList;
