const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  const expectedLength = parseInt(input.dataset.length);
  const actualLength = input.value.length;

  if (actualLength === expectedLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
