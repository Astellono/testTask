const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timer = setInterval(() => {
      seconds -= 1
      let h = Math.floor(seconds / 3600),
        m = Math.floor(seconds % 3600 / 60),
        s = Math.floor(seconds % 3600 % 60);
     

      if (h < 10) h = '0' + h
      if (m < 10) m = '0' + m
      if (s < 10) s = '0' + s

      timerEl.textContent = h + ':' + m + ':' + s

      if (s == 0 & m == 0 & s == 0) {
        alert('Звонок')
        timerEl.textContent = 'hh:mm:ss'
        clearInterval(timer);

      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  if (timerEl.textContent === 'hh:mm:ss') {
    animateTimer(seconds);
  }


  inputEl.value = '';
});
