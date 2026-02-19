import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar con hola", () => {
    expect(saludar()).toEqual("hola");
  });

  it("deberia saludar con el nombre", () => {
    expect(saludar("Ana")).toEqual("hola Ana");
  });
});
