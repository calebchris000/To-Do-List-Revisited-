import Delete from './delete.svg';

const todoList = document.querySelector('.todo-list');

const deleteItself = (list) => {
  todoList.removeChild(list);
};

const deleteList = (list, item, deleteButton) => {
  item.disabled = false;
  deleteButton.src = Delete;
  deleteButton.classList.add('delete');

  deleteButton.addEventListener('click', () => {
    deleteItself(list);
  });

  list.style.backgroundColor = '#FFFEC3';
};

export default deleteList;
