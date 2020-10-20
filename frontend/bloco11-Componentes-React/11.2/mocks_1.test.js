const numeroAleatorio = require("./mocks_1");

test("#numeroAleatorio", () => {
    const mockNumeroAleatorio = jest.spyOn(numeroAleatorio, 'numeroAleatorio');
    mockNumeroAleatorio(10);

    expect(mockNumeroAleatorio).toHaveBeenCalled();
    expect(mockNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(mockNumeroAleatorio).toHaveBeenCalledWith(10);  
})

