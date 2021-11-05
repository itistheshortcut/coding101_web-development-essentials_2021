// javascript HTML DOM

const title = document.querySelector('#title');
const input = document.querySelector('#input');

const returnBgColor = () => {
  return (box.style.backgroundColor = 'blue');
};

const changeContent = () => {
  return (title.textContent = 'Web Development program.');
};

const onClickEvent = () => {
  return (title.textContent = 'I clicked here!');
};

const getValue = (event) => {
  console.log(event.code);
  if (event.key === 'Enter') {
    return (title.textContent = input.value);
  }
};

// add values

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const addBtn = document.querySelector('#addBtn');
const result = document.querySelector('#result');

const addButton = () => {
  let add = Number(num1.value) + Number(num2.value);
  return (result.textContent = add);
};

const subButton = () => {
  let sub = Number(num1.value) - Number(num2.value);
  return (result.textContent = sub);
};

const result2 = document.querySelector('#result2');

const incrementFunc = () => {
  result2.style.color = 'blue';
  return ++result2.textContent;
};

const decrementFunc = () => {
  if (result2.textContent == 0) {
    return (result2.textContent = 0);
  }
  result2.style.color = 'green';
  return --result2.textContent;
};
