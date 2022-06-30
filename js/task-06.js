const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('focus', onInputFocus);

function onInputBlur(event) {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    event.currentTarget.classList.add('valid');
  } else event.currentTarget.classList.add('invalid');
}

function onInputFocus(event) {
  event.currentTarget.classList.remove('valid');
  event.currentTarget.classList.remove('invalid');
}
