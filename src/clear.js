import CreateList from "./createList.js";
import { count } from "./createList.js";
import { collection } from "./createList.js";
const todoList = document.querySelector(".todo-list");

collection = [];
const clear = () => {
  todoList.innerHTML = "";
  count = 0;
  collection = [];
  let fromLocal = JSON.parse(localStorage.getItem("data"));
  let output = [];
  fromLocal.forEach((item) => {
    if (!item.isChecked) {
      output.push(item);

      new CreateList().create(item.chars, item.isChecked);
    }
  });

  localStorage.setItem("data", JSON.stringify(output));
};

export default clear;
