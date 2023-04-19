let counterValue = 0;
const counter = document.querySelector("#conter");
const valueSpan = document.querySelector("#value");
const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});
