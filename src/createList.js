import Checked from "./completed.js";
import Store from "./store.js";
import menu from "./menu.svg";
import Delete from './delete.svg';

let count = 0;
let collection = []

const todoList = document.querySelector(".todo-list");

const store = new Store();

//* Editing the list
const editList = (get) => {
  get.forEach((element) => {
    if (element.index === collective.index) {
      element.chars = item.value;
    }
    item.disabled = true;
    list.style.backgroundColor = "#fff";
    deleteToggle.style.display = "none";
    menuToggle.style.display = "block";
    menuToggle.classList.remove("delete");
    menuToggle.classList.add("more");
    localStorage.setItem("data", JSON.stringify(get));
  });
};
//* Delete a selected list

const deleteList = (list, item, menuToggle, deleteToggle, index) => {
  item.disabled = false;
  deleteToggle.style.display = 'block';
  menuToggle.style.display = 'none';
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

//* Clear all checked list

export const clear = () => {
  todoList.innerHTML = '';
  count = 0;
  collection = [];
  const fromLocal = JSON.parse(localStorage.getItem('data'));
  const output = [];
  fromLocal.forEach((item) => {
    if (!item.checked) {
      output.push(item);
      createList(item.chars, item.checked);
    }
  });

  output.forEach((item, index) => {
    item.index= index
  })

  localStorage.setItem('data', JSON.stringify(output));
};


//* Create a list

const createList = (input, isChecked) => {
  const collective = { chars: "", checked, index: 0 };

  collective.chars = input;
  collective.index = count;

  count += 1;

  const list = document.createElement("div");
  const checkBox = document.createElement("input");
  const item = document.createElement("input");
  const menuToggle = document.createElement("img");
  const deleteToggle = document.createElement("img");

  checkBox.checked = isChecked;
  collective.checked = checkBox.checked;

  if (checkBox.checked) {
    item.style.textDecoration = "line-through";
  }

  item.type = "text";
  checkBox.type = "checkbox";
  menuToggle.src = menu;

  list.classList.add("list");
  item.classList.add("item");
  menuToggle.classList.add("more");
  deleteToggle.classList.add("delete");
  deleteToggle.style.display = "none";
  checkBox.classList.add("checkBox");

  item.disabled = true;
  const checked = new Checked(checkBox, item, list);

  item.value = collective.chars;
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      checked.cross(collective.index, isChecked);
    } else {
      checked.uncross(collective.index, isChecked);
    }
  });

  item.addEventListener("keydown", (event) => {
    const get = JSON.parse(localStorage.getItem("data"));
    if (event.key === "Enter") {
      editList(get);
    }
  });

  menuToggle.addEventListener("click", () => {
    deleteList(list, item, menuToggle, deleteToggle, collective.index);
  });

  list.appendChild(checkBox);
  list.appendChild(item);
  list.appendChild(menuToggle);
  list.appendChild(deleteToggle);
  todoList.appendChild(list);
  collection.push(collective);

  store.add(collection);
};

export default createList;


