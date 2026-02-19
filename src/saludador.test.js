import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar con hola", () => {
    expect(saludar()).toEqual("hola");
  });

  it("deberia saludar con el nombre", () => {
    expect(saludar("Ana")).toEqual("hola Ana");
  });

  it("deberia saludar segun la hora en la mañana", () => {
    expect(saludar("Ana", 9)).toEqual("Buenos días Ana");
  });

  it("deberia saludar segun la hora en la tarde", () => {
    expect(saludar("Ana", 15)).toEqual("Buenas tardes Ana");
  });

  it("deberia saludar segun la hora en la noche", () => {
    expect(saludar("Ana", 22)).toEqual("Buenas noches Ana");
  });

  it("deberia saludar por genero masculino en la mañana (sin titulo si no hay edad)", () => {
    expect(saludar("Juan", 9, "M")).toEqual("Buenos días Juan");
  });

  it("deberia saludar por genero femenino en la mañana (sin titulo si no hay edad)", () => {
    expect(saludar("Ana", 9, "F")).toEqual("Buenos días Ana");
  });

  it("deberia saludar con Sr. si es mayor de 30", () => {
    expect(saludar("Carlos", 9, "M", 40)).toEqual("Buenos días Sr. Carlos");
  });

  it("deberia saludar con Sra. si es mayor de 30", () => {
    expect(saludar("Carla", 9, "F", 40)).toEqual("Buenos días Sra. Carla");
  });

  it("no deberia usar Sr./Sra. si es menor o igual a 30", () => {
    expect(saludar("Carlos", 9, "M", 25)).toEqual("Buenos días Carlos");
  });
  it("deberia saludar en ingles por la mañana", () => {
  expect(saludar("Ana", 9, "F", 40, "EN")).toEqual("Good morning Mrs. Ana");
});

});
