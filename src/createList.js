import Checked from './completed.js';
import menu from './menu.svg';
import Delete from './delete.svg';

const todoList = document.querySelector('.todo-list');

//* Editing the list
const editList = (get, item, data) => {
  get.forEach((element) => {
    if (element.index === data.index) {
      element.value = item;
    }
    localStorage.setItem('data', JSON.stringify(get));
  });
};
//* Delete a selected list

const deleteList = (list, deleteToggle, index) => {
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
    });

    localStorage.setItem('data', JSON.stringify(data));
  });

  list.style.backgroundColor = '#FFFEC3';
};

//* Create a list

const createList = () => {
  todoList.innerHTML = '';
  const fromLocal = JSON.parse(localStorage.getItem('data'));

  fromLocal.forEach((data) => {
    const list = document.createElement('div');
    const checkBox = document.createElement('input');
    const item = document.createElement('input');
    const menuToggle = document.createElement('img');
    const deleteToggle = document.createElement('img');

    checkBox.checked = data.checked;

    if (checkBox.checked) {
      item.style.textDecoration = 'line-through';
    }

    item.type = 'text';
    checkBox.type = 'checkbox';
    menuToggle.src = menu;

    list.classList.add('list');
    item.classList.add('item');
    menuToggle.classList.add('more');
    deleteToggle.classList.add('delete');
    deleteToggle.style.display = 'none';
    checkBox.classList.add('checkBox');

    item.disabled = true;
    const checked = new Checked(checkBox, item, list);

    item.value = data.value;
    checkBox.addEventListener('change', () => {
      if (checkBox.checked) {
        checked.cross(data.index, data.checked);
      } else {
        checked.uncross(data.index, data.checked);
      }
    });

    item.addEventListener('keydown', (event) => {
      const get = JSON.parse(localStorage.getItem('data'));
      if (event.key === 'Enter') {
        editList(get, item.value, data);

        item.disabled = true;
        list.style.backgroundColor = '#fff';
        deleteToggle.style.display = 'none';
        menuToggle.style.display = 'block';
        menuToggle.classList.remove('delete');
        menuToggle.classList.add('more');
      }
    });

    menuToggle.addEventListener('click', () => {
      deleteList(list, deleteToggle, data.index);
      item.disabled = false;
      deleteToggle.style.display = 'block';
      menuToggle.style.display = 'none';
      deleteToggle.src = Delete;
      deleteToggle.classList.add('delete');
    });

    list.appendChild(checkBox);
    list.appendChild(item);
    list.appendChild(menuToggle);
    list.appendChild(deleteToggle);
    todoList.appendChild(list);
  });
};

export default createList;
