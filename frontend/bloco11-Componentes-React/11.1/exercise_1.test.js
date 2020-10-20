const uppercase = (str, callback) => {
    callback(str.toUpperCase());
}
describe('Verificando maiuscula', () => {
    test('Tentando letras Maiusculas', () => {
        uppercase('minuscula', (result) => {
            expect(result).toBe('MINUSCULA');
        })
    })

})