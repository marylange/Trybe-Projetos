let salarioBruto = 3000.00;
let inss = 11 ;
let ir = 7.5;
let parcelaDeducaoImposto = 142.80;
//inss
let salarioBrutoSemInss = salarioBruto * inss / 100;
let salarioLiquidoSemInss = salarioBruto - salarioBrutoSemInss;
//ir
let salarioBrutoSemIr = salarioLiquidoSemInss * ir / 100;
let salarioLiquidoSemIr = salarioBrutoSemIr - parcelaDeducaoImposto;

let salarioLiquido = salarioLiquidoSemInss -salarioLiquidoSemIr;
console.log(salarioLiquido);
