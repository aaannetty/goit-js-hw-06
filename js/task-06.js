const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const expectedLength = parseInt(input.dataset.length);
  const actualLength = input.value.length;

  if (actualLength === expectedLength) {
    return input.classList.add("valid");
  } else {
    return input.classList.add("invalid");
  }
});
