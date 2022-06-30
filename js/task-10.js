function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');

const destroyBoxes = () => (boxesRef.innerHTML = '');

const createBoxes = amount => {
  let markup = '';
  destroyBoxes();

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="width:${30 + i * 10}px; height:${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}"></div>`;
  }
  boxesRef.insertAdjacentHTML('afterbegin', markup);
};

createBtnRef.addEventListener('click', onClickCreateBtn);
destroyBtnRef.addEventListener('click', onClickDestroyBtn);

function onClickCreateBtn() {
  createBoxes(inputRef.value);
}

function onClickDestroyBtn() {
  destroyBoxes();
}
