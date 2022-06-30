const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailRef = event.currentTarget.elements.email;
  const passwordRef = event.currentTarget.elements.password;

  let isEmptyInput = false;

  if (emailRef.value === '') {
    emailRef.classList.add('invalid-input');
    emailRef.addEventListener('focus', onInputFocus);
    isEmptyInput = true;
  }

  if (passwordRef.value === '') {
    passwordRef.classList.add('invalid-input');
    passwordRef.addEventListener('focus', onInputFocus);
    isEmptyInput = true;
  }

  function onInputFocus(event) {
    event.currentTarget.classList.remove('invalid-input');
  }

  if (isEmptyInput) alert('All fields must be filled in');
  else {
    const formData = {
      email: emailRef.value,
      password: passwordRef.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
