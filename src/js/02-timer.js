import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const datetime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
startBtn.disabled = true

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // minDate: 'today',
  onClose(selectedDates) {

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Qui timide rogat docet negare');
    } else startBtn.disabled = false;
  },
};
startBtn.addEventListener('click', clickBtn);
let dates = flatpickr(datetime, options);

function clickBtn() {
    setInterval(() => {
        let ms = dates.selectedDates[0] - new Date();
        let timeForCounter = convertMs(ms);
       
        daysRef.textContent = addLeadingZero(timeForCounter.days)
        hoursRef.textContent = addLeadingZero(timeForCounter.hours);
        minutesRef.textContent = addLeadingZero(timeForCounter.minutes);
        secondsRef.textContent = addLeadingZero(timeForCounter.seconds);
    }, 1000)
    
}

const addLeadingZero = value => value.toString().padStart(2, 0)



function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// const selectedDates = document.querySelector('#datetime-picker');
// const startCounterBtn = document.querySelector('[data-start]');

// const counterDays = document.querySelector('[data-days]');
// const counterHours = document.querySelector('[data-hours]');
// const counterMinutes = document.querySelector('[data-minutes]');
// const counterSeconds = document.querySelector('[data-seconds]');

// let ms; // змінна для запису часу відліку у мс

// let timerId = null;

// startCounterBtn.addEventListener('click', onClick);

// const dataPickr = new flatpickr(selectedDates);

// function onClick() {
//   timerId = setInterval(() => {

//     ms = dataPickr.selectedDates[0] - new Date();

//     const timeForCounter = convertMs(ms);

//       counterDays.textContent = timeForCounter.days;
//       counterHours.textContent = timeForCounter.hours;
//       counterMinutes.textContent = timeForCounter.minutes;
//       counterSeconds.textContent = timeForCounter.seconds;

//   }, 1000);
// }



// function convertMs(ms) {

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }


