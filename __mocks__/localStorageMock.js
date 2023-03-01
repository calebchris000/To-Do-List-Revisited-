const createMock = (input, checked, output) => {
  const object = { value: input, checked, index: output.length };
  output.push(object);
  localStorage.setItem('data', JSON.stringify(output));
  return output;
};

export default createMock;