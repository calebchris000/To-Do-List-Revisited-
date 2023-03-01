const clear = (arr) => {
  const output = [];
  arr.forEach((item) => {
    if (!item.checked) {
      output.push(item);
    }
  });

  output.forEach((item, index) => {
    item.index = index;
  });
  return output;
};

export default clear;