const generateButton = document.getElementById("generateButton");
const random = document.getElementById("randomNumber");

const colors = [
  "red",
  "yellow",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "brown",
  "cyan",
  "magenta",
  "aqua",
];

generateButton.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  random.innerText = randomNumber;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
