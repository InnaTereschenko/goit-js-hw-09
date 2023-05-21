import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('button[data-start]'),
  seconds: document.querySelector('span[data-seconds]'),
  minutes: document.querySelector('span[data-minutes]'),
  hours: document.querySelector('span[data-hours]'),
  days: document.querySelector('span[data-days]'),
};

refs.buttonStart.disabled = true;

const options = {
  enableTime: true,
  enableSeconds: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.buttonStart.disabled = true;
      return;
    }
    refs.buttonStart.disabled = false;
    console.log(selectedDates[0]);
  },
};
flatpickr('input#datetime-picker', options);


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

refs.buttonStart.addEventListener('click', () => {
  let timer = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = new Date(refs.input.value) - currentTime;
      
    refs.buttonStart.disabled = true;
if(deltaTime >= 0) {
      let timeObject = convertMs(deltaTime);
  refs.days.textContent = timeObject.days;
  refs.hours.textContent = timeObject.hours;
  refs.minutes.textContent = timeObject.minutes;
  refs.seconds.textContent = timeObject.seconds;
  return;
  };
    clearInterval(timer);
Notiflix.Notify.success('Countdown is over');
    }, 1000);
  
});













