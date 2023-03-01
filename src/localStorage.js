

const create = (input, checked, array) => {
let object = {value: input, checked: checked, index: array.length};
array.push(object);
localStorage.setItem('data', JSON.stringify(array))
return array;
}

export default create