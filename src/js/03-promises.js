import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  btnCreat: document.querySelector('button'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]')
}

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    
  });
  
}

refs.form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  let firstDelay = Number(refs.inputDelay.value);
  let stepDelay = Number(refs.inputStep.value);
  for (let i = 0; i < refs.inputAmount.value; i ++) {
    
  createPromise(i + 1, firstDelay + i * stepDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    console.log(firstDelay);
    
}
  });

