import { sumar, restar,multiplicar,dividir } from "./sumador.js";

describe("Operaciones matematicas", () => {

  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia restar dos numeros", () => {
    expect(restar(5, 2)).toEqual(3);
  });
   it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(4, 3)).toEqual(12);
  });
    it("deberia dividir dos numeros", () => {
    expect(dividir(10, 2)).toEqual(5);
  });
});