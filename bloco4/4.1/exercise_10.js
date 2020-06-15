let valorProduto = 10;
let valorVenda = 30;
let impostos = 20;
let valorImposto = valorProduto * (impostos/100);
let custoProduto = valorProduto+ valorImposto;

let lucroUnitario = valorVenda - custoProduto;

let lucroEmpresa = lucroUnitario * 1000;

if(valorProduto > 0){
    console.log("O lucro da empresa será de: " + lucroEmpresa);
} else if(valorProduto <= 0){
    process.exit("Erro");
}