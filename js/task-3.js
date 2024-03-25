const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
});

// const bodyAll = document.querySelector('body');
// const textP = document.querySelector('p');
// const textInput = document.querySelector('#name-input');
// const h1Span = document.querySelector('h1');
// const script3 = document.querySelector('[src="./js/task-3.js"]');

// const output = document.querySelector('#name-output');

// const divWrap = document.createElement('div');
// divWrap.classList.add('container');
// divWrap.innerHTML = textP + textInput + h1Span;
// bodyAll.innerHTML = divWrap + script3;

// textInput.addEventListener('input', event => {
//   if (event.currentTarget.value.trim() === '') {
//     output.textContent = 'Anonymous';
//   } else {
//     output.textContent = event.currentTarget.value.trim();
//   }
// });
