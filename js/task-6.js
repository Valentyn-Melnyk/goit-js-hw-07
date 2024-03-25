function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const buttonAll = document.querySelectorAll('button');

buttonAll[0].style.backgroundColor = '#4E75FF';
buttonAll[1].style.backgroundColor = '#FF4E4E';
buttonAll.forEach(button => {
  button.style.color = '#FFF';
});

buttonAll[0].addEventListener('mouseover', function () {
  buttonAll[0].style.backgroundColor = '#6C8CFF';
});
buttonAll[0].addEventListener('mouseout', function () {
  buttonAll[0].style.backgroundColor = '#4E75FF';
});
buttonAll[1].addEventListener('mouseover', function () {
  buttonAll[1].style.backgroundColor = '#FF7070';
});
buttonAll[1].addEventListener('mouseout', function () {
  buttonAll[1].style.backgroundColor = '#FF4E4E';
});

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.append(box);
  }
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});
