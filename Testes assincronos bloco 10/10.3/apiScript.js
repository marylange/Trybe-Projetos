const API_URL = "https://icanhazdadjoke.com/";
const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'text/plain' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));

}

window.onload = () => fetchJoke();
