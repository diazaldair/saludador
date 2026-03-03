import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love-Love");
  });

  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("15-Love");
  });

  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30-Love");
  });

  it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40-Love");
  });

  it("jugador 2 anota 1 vez jugador uno en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love-15");
  });

  it("jugador 1 y jugador 2 anotan 1 vez => 15-15", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("15-15");
  });

  it("jugador 2 anota 2 veces jugador 1 en cero => Love-30", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love-30");
  });

  it("jugador 2 anota 3 veces jugador 1 en cero => Love-40", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love-40");
  });

  it("cuando ambos tienen 40 => Deuce", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    expect(tennis.score()).toEqual("Deuce");
  });

  it("desde Deuce, si jugador 1 anota => Advantage Player 1", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    tennis.player1Scores();

    expect(tennis.score()).toEqual("Advantage Player 1");
  });

  it("desde Advantage Player 1, si anota otra vez => Game for Player 1", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    tennis.player1Scores(); // advantage
    tennis.player1Scores(); // game

    expect(tennis.score()).toEqual("Game for Player 1");
  });

  it("desde Deuce, si jugador 2 anota => Advantage Player 2", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    tennis.player2Scores();

    expect(tennis.score()).toEqual("Advantage Player 2");
  });

  it("desde Advantage Player 2, si anota otra vez => Game for Player 2", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    tennis.player2Scores(); // advantage
    tennis.player2Scores(); // game

    expect(tennis.score()).toEqual("Game for Player 2");
  });

  it("si esta Advantage Player 1 y anota player 2 => vuelve a Deuce", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    tennis.player1Scores(); // advantage p1
    tennis.player2Scores(); // vuelve a deuce

    expect(tennis.score()).toEqual("Deuce");
  });

  it("si esta Advantage Player 2 y anota player 1 => vuelve a Deuce", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    tennis.player2Scores(); // advantage p2
    tennis.player1Scores(); // vuelve a deuce

    expect(tennis.score()).toEqual("Deuce");
  });

  // ✅ Game SIN deuce (player 1)
  it("jugador 1 anota 4 veces jugador 2 en cero => Game for Player 1", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for Player 1");
  });

  it("jugador 1 anota 4 y jugador 2 anota 1 => Game for Player 1", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();

    expect(tennis.score()).toEqual("Game for Player 1");
  });

  it("jugador 1 anota 4 y jugador 2 anota 2 => Game for Player 1", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();

    expect(tennis.score()).toEqual("Game for Player 1");
  });

  // ✅ Game SIN deuce (player 2)
  it("jugador 2 anota 4 veces jugador 1 en cero => Game for Player 2", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Game for Player 2");
  });

  it("jugador 2 anota 4 y jugador 1 anota 1 => Game for Player 2", () => {
    let tennis = new Tennis();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    tennis.player1Scores();

    expect(tennis.score()).toEqual("Game for Player 2");
  });

  it("jugador 2 anota 4 y jugador 1 anota 2 => Game for Player 2", () => {
    let tennis = new Tennis();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();

    tennis.player1Scores();
    tennis.player1Scores();

    expect(tennis.score()).toEqual("Game for Player 2");
  });

  it("escenario completo hasta Game for Player 1", () => {
  let tennis = new Tennis();

  expect(tennis.score()).toEqual("Love-Love");

  tennis.player1Scores();
  expect(tennis.score()).toEqual("15-Love");

  tennis.player2Scores();
  expect(tennis.score()).toEqual("15-15");

  tennis.player1Scores();
  expect(tennis.score()).toEqual("30-15");

  tennis.player2Scores();
  expect(tennis.score()).toEqual("30-30");

  tennis.player1Scores();
  expect(tennis.score()).toEqual("40-30");

  tennis.player2Scores();
  expect(tennis.score()).toEqual("Deuce");

  tennis.player1Scores();
  expect(tennis.score()).toEqual("Advantage Player 1");

  // ✅ ÚLTIMO PASO DEL PDF
  tennis.player1Scores();
  expect(tennis.score()).toEqual("Game for Player 1");
});
});