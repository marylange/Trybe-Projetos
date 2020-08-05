const service = require("./mocks_1");

test("#divisaoNumero", () => {
    service.divisaoNumero = jest.fn()
    .mockReturnValue(10);

    service.divisaoNumero();
    expect(service.divisaoNumero).toHaveBeenCalled();// É necessärio chamar a função antes de executar o teste para não ocorrer erros.
    expect(service.divisaoNumero).toHaveBeenCalledTimes(1);
    expect(service.divisaoNumero()).toBe(10);
});