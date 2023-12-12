import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector('[data-start]');
const dateDays = document.querySelector('[data-days]');
const dateHours = document.querySelector('[data-hours]');
const dateMinutes = document.querySelector('[data-minutes]');
const dateSeconds = document.querySelector('[data-seconds]');
const datetimePicker = document.querySelector('#datetime-picker');
let countdownInterval;

function convertMs(ms) {
// Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

// Remaining days
  const days = Math.floor(ms / day);
// Remaining hours
  const hours = Math.floor((ms % day) / hour);
// Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
console.log(convertMs(2000));// {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000));// {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000));// {days: 0, hours: 6 minutes: 42, seconds: 20}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      alert("Please choose a date in the future");
      return;
    }
    startBtn.removeAttribute('disabled');
  },
};
flatpickr("#datetime-picker", options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function TimerDisplay(time) {
  dateDays.textContent = addLeadingZero(time.days);
  dateHours.textContent = addLeadingZero(time.hours);
  dateMinutes.textContent = addLeadingZero(time.minutes);
  dateSeconds.textContent = addLeadingZero(time.seconds);
}

function Countdown(selectedDate) {
  clearInterval(countdownInterval);

  function updateCountdown() {
    
      const currentDate = new Date().getTime();
      const timeShow = selectedDate - currentDate;

      if (timeShow <= 0) {
        clearInterval(countdownInterval);
        TimerDisplay(convertMs(0));
        startBtn.setAttribute('disabled', true);
        return;
      }

      const convert = convertMs(timeShow);
      TimerDisplay(convert);

  }
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}


startBtn.addEventListener('click', () => {
  const selectedDate = flatpickr.parseDate(datetimePicker.value, "Y-m-d H:i");
  Countdown(selectedDate);
});

