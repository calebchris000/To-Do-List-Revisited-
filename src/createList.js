import Checked from "./completed.js";
import Store from "./store.js";
import menu from "./menu.svg";
import deleteList from "./deleteList.js";

let todoList = document.querySelector(".todo-list");

let store = new Store();
export let count = 0;
export let collection = [];

class CreateList {
  constructor() {}

  create(input, isChecked) {
    let collective = { chars: "", isChecked: isChecked, index: 0 };

    collective.chars = input;
    collective.index = count;

    count += 1;

    let list = document.createElement("div");
    let checkBox = document.createElement("input");
    let item = document.createElement("input");
    let deleteButton = document.createElement("img");

    checkBox.checked = isChecked;

    checkBox.checked ? (item.style.textDecoration = "line-through") : 0;

    item.type = "text";
    checkBox.type = "checkbox";
    deleteButton.src = menu;

    list.classList.add("list");
    item.classList.add("item");
    deleteButton.classList.add("more");
    checkBox.classList.add("checkBox");

    item.disabled = true;
    const checked = new Checked(checkBox, item, list);

    item.value = collective.chars;
    checkBox.addEventListener("change", () => {
      checkBox.checked
        ? checked.cross(collective.index, isChecked)
        : checked.uncross(collective.index, isChecked);
    });

    deleteButton.addEventListener("click", () => {
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
