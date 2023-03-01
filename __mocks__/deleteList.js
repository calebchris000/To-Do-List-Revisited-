const deleteList = (data, index) => {
  data.forEach((element) => {
    if (element.index === index) {
      data.splice(index, 1);
    }
  });
  data.forEach((item, index) => {
    item.index = index;
  });

  return data;
};

export default deleteList;
