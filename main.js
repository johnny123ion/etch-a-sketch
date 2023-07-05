const mainDiv = document.querySelector('.main-div');
const mainDivWidth = mainDiv.offsetWidth;
const input = document.querySelector('#grid-size');
const rangeValue = document.getElementById('range-value');
const black = document.querySelector('#black')
const rainbow = document.querySelector('#rainbow')
const color = document.querySelector('#color')
const white = document.querySelector('#white')
const reset = document.querySelector('#reset')
let colorChoice = 'black'
let allDivs;
rangeValue.textContent = input.value;

black.addEventListener('click', () => colorChoice = 'black')
rainbow.addEventListener('click', () => colorChoice = 'rainbow')
color.addEventListener('click', () => colorChoice = 'color')
white.addEventListener('click', () => colorChoice = 'white')


input.addEventListener('input', makeGrid);

function makeGrid() {
  colorChoice = 'black';
  let gridSize = input.value;
  rangeValue.textContent = `${gridSize} x ${gridSize}`;
  mainDiv.innerHTML = '';

  for (let i = 0; i < gridSize ** 2; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.style.width = `${mainDivWidth / gridSize}px`;
    div.style.height = `${mainDivWidth / gridSize}px`;
    mainDiv.append(div);
  }

  allDivs = mainDiv.querySelectorAll('div');

  allDivs.forEach(square => {
    square.addEventListener('mouseover', () => {
      if (colorChoice === 'black') {
        square.style.backgroundColor = 'black'
      } else if (colorChoice === 'rainbow') {
        square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
      } else if (colorChoice === 'color') {
        square.style.backgroundColor = color.value
      } else if (colorChoice === 'white') {
        square.style.backgroundColor = 'white'
      }
    })
  })
}

window.addEventListener('load', makeGrid);

reset.addEventListener('click', () => {
  allDivs.forEach(square => {
    square.style.backgroundColor = 'white'
  })
})
