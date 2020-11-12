const angulosDoTriangulo = (a, b, c) => {
    let soma = a + b + c;
    if(soma === 180) {
        return true;
    }
    return 'Erro!';
}
console.log(angulosDoTriangulo(30, 90, 60));