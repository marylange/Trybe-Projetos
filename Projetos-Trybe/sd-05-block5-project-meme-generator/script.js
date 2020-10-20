const loadFile = (event) => {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
};

const escreveCaixaImagem = () => {
  const caixaTexto = document.getElementById('text-input');
  const tagP = document.getElementById('meme-text');
  tagP.innerText = caixaTexto.value;
};

const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const container = document.getElementById('meme-image-container');

const aplicarBorda = (evento) => {
  if (evento.target === btnFire) {
    container.style.borderColor = 'red';
    container.style.borderWidth = '3px';
    container.style.borderStyle = 'dashed';
  }

  if (evento.target === btnWater) {
    container.style.borderColor = 'blue';
    container.style.borderWidth = '5px';
    container.style.borderStyle = 'double';
  }

  if (evento.target === btnEarth) {
    container.style.borderColor = 'green';
    container.style.borderWidth = '6px';
    container.style.borderStyle = 'groove';
  }
};

// Chamada das funções
const inputMemeInsert = document.getElementById('meme-insert');
inputMemeInsert.addEventListener('change', loadFile);

const inputTextInput = document.getElementById('text-input');
inputTextInput.addEventListener('input', escreveCaixaImagem);

btnFire.addEventListener('click', aplicarBorda);

btnWater.addEventListener('click', aplicarBorda);

btnEarth.addEventListener('click', aplicarBorda);
