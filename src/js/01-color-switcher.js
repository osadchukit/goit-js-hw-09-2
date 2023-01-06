function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBt = document.querySelector('[data-start]');
const stopBt = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null

startBt.addEventListener('click', start)
stopBt.addEventListener('click', stop);

// stopBt.disabled = true

function start() {
  // startBt.disabled = true;
  // stopBt.disabled = false;
  clearInterval(timerId);
  timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stop(){
  // stopBt.disabled = true;
  // startBt.disabled = false;
  body.style.backgroundColor = 'white';
  clearInterval(timerId)
}


