const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
  if (inputEl.value !== '') {
    spanEl.textContent = inputEl.value;
  } else spanEl.textContent = 'Anonymous';
}
