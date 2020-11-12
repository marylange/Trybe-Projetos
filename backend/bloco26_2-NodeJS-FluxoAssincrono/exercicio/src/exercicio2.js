const minhaPromise = async (par1, par2, par3) => {
  if (typeof par1 !== "number" || typeof par2 !== "number" || typeof par3 !== "number") {
    return Promise.reject("Digite apenas números");
  } else {
    const soma = par1 + par2;
    const result = soma * par3;
    if (result < 50) {
      return Promise.reject("Valor muito baixo");
    } else {
      const r = await result;
      console.log("O resultado é", r);
    }
  }
}
minhaPromise(2, 3, 20);
