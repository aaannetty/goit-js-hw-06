let counterValue = 0;
const counter = document.querySelector("#conter");
const valueSpan = document.querySelector("#value");
const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");

const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
};
decrementBtn.addEventListener("click", onDecrementBtnClick);

const onIncrementBtnClick = () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
};
incrementBtn.addEventListener("click", onIncrementBtnClick);
