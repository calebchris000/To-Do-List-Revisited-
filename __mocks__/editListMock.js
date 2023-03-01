const editList = (get, item, data) => {
  get.forEach((element) => {
    if (element.index === data.index) {
      element.value = item;
    }
  });
  return get;
};

export default editList;