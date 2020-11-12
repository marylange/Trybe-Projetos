// const cards = ['cinco-de-ouros.png', 'nove-de-espadas.png', 'quatro-de-paus.png', 'seis-de-copas.png', 'sete-de-espadas.png', 'sete-de-paus.png', 'tres-de-ouros.png'];
// const cartaVerso = document.getElementById("card-verso");

document.getElementById("card-verso").onclick = function () {
  let container = document.getElementById("container-gridCartas");
  const elementoDiv = document.createElement("div");
  container.appendChild(elementoDiv);
  const elementoImg = document.createElement("img").src = './imagens/' + cards + ".png";
  elementoDiv.appendChild(elementoImg);

  if (elementoImg != cards) {
    elementoDiv.push(cards);
  } else {
    cards += 1;
  }
}
