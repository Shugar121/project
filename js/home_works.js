

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight

let direction = 'right'

const moveBlock = () => {
    if (direction === 'right') {
        if (positionX < maxParentWidth) {
            positionX++
        } else {
            direction = 'down'
        }
    } else if (direction === 'down') {
        if (positionY < maxParentHeight) {
            positionY++
        } else {
            direction = 'left'
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX--
        } else {
            direction = 'up'
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY--
        } else {
            direction = 'right'
        }
    }

    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(moveBlock)
}

moveBlock()

let secondsElement = document.getElementById('seconds');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let timerInterval;
let seconds = 0;

function startTimer() {
    timerInterval = setInterval(updateSeconds, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    updateDisplay();
    startButton.disabled = false;
    stopButton.disabled = true;
}

function updateSeconds() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    secondsElement.textContent = seconds;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
