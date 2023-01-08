import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const delayRef = formRef[0];
const stepRef = formRef[1];
const amountRef = formRef[2];

formRef.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();

  let delay = Number(delayRef.value);
  let step = Number(stepRef.value);
  let amount = Number(amountRef.value);



  for (let i = 0; i < amount; i++) { 

  createPromise(i + 1, delay += step)
    .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({ position, delay });
    }}, delay)
  })
}

  
  

  
  
  
  
  
  
  
  
  
  
  


  

// const form = document.querySelector('.form');
// const delayEl = document.querySelector('input[name="delay"]');
// const stepEl = document.querySelector('input[name="step"]');
// const amountEl = document.querySelector('input[name="amount"]');

// form.addEventListener('submit', onClick);

// function onClick(event) {
//   event.preventDefault();

//   let delay = Number(delayEl.value);
//   let step = Number(stepEl.value);
//   let amount = Number(amountEl.value);

//   for (let i = 0; i <= amount; i += 1) {
//     createPromise(i + 1, delay += step)
//       .then(({ position, delay }) => {
//         console.log(`✅  ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌  ${position} in ${delay}ms`);
//       });
//   }

//   // event.currentTarget.reset();
// }


// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }









