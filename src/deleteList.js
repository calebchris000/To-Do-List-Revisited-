import Delete from './delete.svg';

/* eslint-disable no-unused-vars */
import { count, collection } from './export.js';

const todoList = document.querySelector('.todo-list');

const deleteList = (list, item, menuToggle, deleteToggle, index) => {
  item.disabled = false;
  deleteToggle.style.display = 'block'
  menuToggle.style.display = 'none'
  deleteToggle.src = Delete;
  deleteToggle.classList.add('delete');

  deleteToggle.addEventListener('click', () => {
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
