import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });

  //Jugador 1 anota 1 vez jugador 2 en 0=> "15 - Love"
  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("15 - Love"); //Vericar    ->ASSERT
  });
  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });
  it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - Love");
  });

  /*it("jugador 1 anota 4 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for player 1");
  });*/
  it("jugador 2 anota 1 vez jugador uno en cero", () => {
  let tennis = new Tennis();
  tennis.player2Scores();
  expect(tennis.score()).toEqual("Love - 15");
});

});