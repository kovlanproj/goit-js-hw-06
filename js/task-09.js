function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.body;
const spanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}
