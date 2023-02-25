import CreateList from "./src/createList.js";


const restoreItems = () => {
    let fromLocal = JSON.parse(localStorage.getItem('data'));

    fromLocal.forEach((item) => {
        new CreateList().create(item.chars, item.isChecked)
    })
}

export default restoreItems