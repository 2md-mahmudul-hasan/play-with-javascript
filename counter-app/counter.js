const counterElement = document.getElementById("counter-ele");
const counterString = document.getElementById("counter-string");

let counter = 0;
function addNumber() {
  counter++;
  counterElement.innerText = counter;
}

function save() {
  let countAndText = counter + "-";
  counterString.textContent += countAndText;
  counterReset();
}

function counterReset() {
  counter = 0;
  counterElement.innerText = counter;
}
