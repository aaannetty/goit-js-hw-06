const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('All fields must be filled in!');
    return;
  }

  const formElements = event.currentTarget.elements;

  console.log({
    email: emailInput.value,
    password: passwordInput.value,
  });

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });

  form.reset();
}
