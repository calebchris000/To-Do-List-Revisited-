class Checked {
  constructor(item, text, list) {
    this.item = item;
    this.text = text;
    this.list = list;
  }

  cross(index) {
    this.text.style.textDecoration = 'line-through';

    const fromLocal = JSON.parse(localStorage.getItem('data'));

    fromLocal.forEach((element) => {
      if (element.index === index) {
        element.checked = true;
      }
    });
    localStorage.setItem('data', JSON.stringify(fromLocal));
  }

  uncross(index) {
    this.text.style.textDecoration = 'none';

    const fromLocal = JSON.parse(localStorage.getItem('data'));

    fromLocal.forEach((element) => {
      if (element.index === index) {
        element.checked = false;
      }
    });
    this.list.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    localStorage.setItem('data', JSON.stringify(fromLocal));
  }
}

export default Checked;
