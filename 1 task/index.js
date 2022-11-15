const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
  //   timer = setInterval(() => {
  //     seconds -= 1
  //     let h = Math.floor(seconds / 3600),
  //       m = Math.floor(seconds % 3600 / 60),
  //       s = Math.floor(seconds % 3600 % 60);
  //     if (s === 0 & m === 0 & s === 0) clearInterval(timer);
  //     if (h < 10) h = '0' + h
  //     if (m < 10) m = '0' + m
  //     if (s < 10) s = '0' + s
  //     console.log(timerEl);
  //     timerEl.textContent = h + ':' + m + ':' + s
  //   }, 1000)
   };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
