const minutesBlock = document.querySelector('.js-minutes'),
   secondsBlock = document.querySelector('.js-seconds'),
   hundredthsSecondsBlock = document.querySelector('.js-hundredths-seconds'),
   btnStart = document.querySelector('.js-btn-start'),
   btnReset = document.querySelector('.js-btn-reset'),
   outBlock = document.querySelector('.out'),
   outUl = document.querySelector('.out-ul');

// outUlLapText = document.querySelector('.out-lap-text'),
// outUlLapTime = document.querySelector('.out-lap-time');



let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const startTimer = () => {
   milliseconds++;

   if (milliseconds <= 99) {
      hundredthsSecondsBlock.innerHTML = milliseconds;
   }
   if (milliseconds < 10) {
      hundredthsSecondsBlock.innerHTML = '0' + milliseconds;
   }

   if (milliseconds == 99) {
      hundredthsSecondsBlock.innerHTML = '00';
   }

   if (milliseconds > 99) {
      seconds++;
      secondsBlock.innerHTML = '0' + seconds;
      milliseconds = 0;
   }
   if (seconds > 9) {
      secondsBlock.innerHTML = seconds;
   }

   if (seconds > 59) {
      minutes++;
      minutesBlock.innerHTML = '0' + minutes;

      seconds = 0;
      secondsBlock.innerHTML = '0' + seconds;
   }

   if (minutes > 9) {
      minutesBlock.innerHTML = minutes;
   }
}


btnStart.addEventListener('click', () => {
   if (btnStart.innerHTML === 'Start') start();
   else stop();
})

function start() {
   clearInterval(interval);
   interval = setInterval(startTimer, 10);
   btnStart.classList.add('active');
   btnStart.innerHTML = 'Stop';
   btnReset.innerHTML = 'Lap';
}

function stop() {
   clearInterval(interval);
   btnStart.classList.remove('active');
   btnStart.innerHTML = 'Start';
   btnReset.innerHTML = 'Reset';
}


btnReset.addEventListener('click', () => {
   if (btnReset.innerHTML === 'Reset') reset();
   else lap();
});


function reset() {
   clearInterval(interval);
   minutes = 0;
   seconds = 0;
   milliseconds = 0;

   secondsBlock.innerHTML = '00';
   minutesBlock.innerHTML = '00';
   hundredthsSecondsBlock.innerHTML = '00';

   count = 0;
   clearLaps();
};


let count = 0;
function lap() {
   let outLi = document.createElement('li');
   outLi.classList.add('out-li');

   count++;

   outLi.innerHTML = `<span>Lap ${count}</span> <span>${minutesBlock.innerHTML} : ${secondsBlock.innerHTML} : ${hundredthsSecondsBlock.innerHTML}</span>`;
   outUl.append(outLi);
};

const clearLaps = () => {
   outUl.innerHTML = null;
};




