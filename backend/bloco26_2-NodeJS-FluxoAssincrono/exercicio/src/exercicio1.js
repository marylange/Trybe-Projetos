const minhaPromise = (par1, par2, par3) => {
  return new Promise((resolve, reject) => {
    if (typeof par1 !== "number" || typeof par2 !== "number" || typeof par3 !== "number") reject("Digite apenas números");
    const soma = par1 + par2;
    const result = soma * par3;
    if (result < 50) {
      reject("Valor muito baixo");
    } else {
      resolve(result);
    }
  })
}

minhaPromise(2, 3, 20).then((content) => {
  console.log(`Meu resultado é ${content}`);
})
  .catch((err) => {
    console.error(err);
  });