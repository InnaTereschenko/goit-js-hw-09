const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;
stopBtn.disabled = true;

startBtn.classList.add('start-btn');
stopBtn.classList.add('stop-btn');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});


stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  clearInterval(timerId);
});
  



