const input = document.getElementById('input');

let output = [];

const create = (input, checked) => {
let object = {value: input, checked: checked, index: output.length};
output.push(object);
localStorage.setItem('data', JSON.stringify(output))
return output;
}

export default create