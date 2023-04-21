const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    nameOutput.textContent = event.target.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
