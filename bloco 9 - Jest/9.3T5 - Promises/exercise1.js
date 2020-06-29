const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
};
const fetchJoke = () => {
    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => {
            createElements(data);
        })
        .catch("Erro");
}

const createElements = (data) => {
    const elementoUl = document.getElementsByClassName('conteinerPiada');
    const elementoLi = document.createElement('li');
    elementoLi.innerHTML = data;
    elementoUl.appendChild(elementoLi);
}


fetchJoke();
createElements(fetchJoke());