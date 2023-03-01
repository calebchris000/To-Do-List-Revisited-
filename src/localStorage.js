const create = (input, checked, array) => {
  const object = { value: input, checked, index: array.length };
  array.push(object);
  localStorage.setItem('data', JSON.stringify(array));
  return array;
};

export default create;