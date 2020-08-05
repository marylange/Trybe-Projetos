/*
    A função getPlanet abaixo imprime o planeta Marte de forma síncrona. 
    Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.
*/

const imprimeMars = ({name}) => {
    console.log(name);
}

const getPlanet = (callback) => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    setTimeout(() => callback(mars), 4000);
  };
  getPlanet(imprimeMars); // imprime Marte depois de 4 segundos
  