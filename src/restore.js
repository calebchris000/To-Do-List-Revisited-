import CreateList from './createList.js';

const restoreItems = () => {
  const fromLocal = JSON.parse(localStorage.getItem('data'));

  fromLocal.forEach((item) => {
    new CreateList().create(item.chars, item.isChecked);
  });
};

export default restoreItems;