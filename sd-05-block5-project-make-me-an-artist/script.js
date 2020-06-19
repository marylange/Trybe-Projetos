// cria dinamicamente os pixels
function criarQuadros() {
  const div1 = document.querySelector('.pixel-board');

  for (let i = 0; i < 25; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}
criarQuadros();

// evento de click nas cores
let corAtual = 'black';

function aplicarCorBlack() {
  corAtual = 'black';
}

function aplicarCorYellow() {
  corAtual = 'yellow';
}

function aplicarCorBlue() {
  corAtual = 'blue';
}

function aplicarCorGreen() {
  corAtual = 'green';
}

// caixas de pixel em branco
const pixels = document.querySelectorAll('.pixel');
function identicarPixel(evento) {
  evento.target.style.backgroundColor = corAtual;
}

// limpar cores
function apagarEstilos() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = null;
  }
}

const coresBlack = document.querySelector('.selected');
coresBlack.addEventListener('click', aplicarCorBlack);

const coresYellow = document.querySelector('.color-yellow');
coresYellow.addEventListener('click', aplicarCorYellow);

const coresBlue = document.querySelector('.color-blue');
coresBlue.addEventListener('click', aplicarCorBlue);

const coresGreen = document.querySelector('.color-green');
coresGreen.addEventListener('click', aplicarCorGreen);

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', identicarPixel);
}

const botaoApagarCores = document.querySelector('#clear-board');
botaoApagarCores.addEventListener('click', apagarEstilos);
