const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorChange() {
    timerId = setInterval(changeBackgroundColor, 1000);
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function stopColorChange() {
  clearInterval(timerId);
}

startBtn.addEventListener('click', function () {
  startColorChange();
  startBtn.toggleAttribute('disabled');
});

stopBtn.addEventListener('click', function () {
  stopColorChange();

    startBtn.removeAttribute('disabled');

});