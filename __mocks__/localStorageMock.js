

const createMock = (input, checked, output) => {
    let object = {value: input, checked: checked, index: output.length};
    output.push(object);
    localStorage.setItem('data', JSON.stringify(output))
    return output;
    }
    
    export default createMock