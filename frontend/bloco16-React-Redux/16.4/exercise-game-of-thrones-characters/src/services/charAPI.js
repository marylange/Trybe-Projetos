const APIURL = 'https://anapioficeandfire.com/api/characters?name='

export const charAPI = (char) => (
  fetch(`${APIURL}${char.split().join('+')}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
