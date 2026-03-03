import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love-Love");
  });

  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    let resultado = tennis.score();
    expect(resultado).toEqual("15-Love");
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
it("desde Deuce, si jugador 1 anota => Advantage player 1", () => {
  let tennis = new Tennis();

  // llegar a Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // jugador 1 anota (4-3)
  tennis.player1Scores();

  expect(tennis.score()).toEqual("Advantage player 1");
});
it("desde Advantage player 1, si anota otra vez => Game for player 1", () => {
  let tennis = new Tennis();

  // llegar a Deuce
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Advantage player 1
  tennis.player1Scores();

  // Game player 1
  tennis.player1Scores();

  expect(tennis.score()).toEqual("Game for player 1");
});
it("desde Deuce, si jugador 2 anota => Advantage player 2", () => {
  let tennis = new Tennis();

  // llegar a Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // jugador 2 anota (3-4)
  tennis.player2Scores();

  expect(tennis.score()).toEqual("Advantage player 2");
});
it("desde Advantage player 2, si anota otra vez => Game for player 2", () => {
  let tennis = new Tennis();

  // llegar a Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Advantage player 2 (3-4)
  tennis.player2Scores();

  // Game player 2 (3-5)
  tennis.player2Scores();

  expect(tennis.score()).toEqual("Game for player 2");
});
it("si esta Advantage player 1 y anota player 2 => vuelve a Deuce", () => {
  let tennis = new Tennis();

  // Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Advantage player 1 (4-3)
  tennis.player1Scores();

  // player 2 empata (4-4) => Deuce
  tennis.player2Scores();

  expect(tennis.score()).toEqual("Deuce");
});

it("si esta Advantage player 2 y anota player 1 => vuelve a Deuce", () => {
  let tennis = new Tennis();

  // Deuce (3-3)
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  // Advantage player 2 (3-4)
  tennis.player2Scores();

  // player 1 empata (4-4) => Deuce
  tennis.player1Scores();

  expect(tennis.score()).toEqual("Deuce");
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

// ✅ Game SIN deuce (player 1)
it("jugador 1 anota 4 veces jugador 2 en cero => Game for player 1", () => {
  let tennis = new Tennis();
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();
  expect(tennis.score()).toEqual("Game for player 1");
});

it("jugador 1 anota 4 y jugador 2 anota 1 => Game for player 1", () => {
  let tennis = new Tennis();

  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();

  expect(tennis.score()).toEqual("Game for player 1");
});

it("jugador 1 anota 4 y jugador 2 anota 2 => Game for player 1", () => {
  let tennis = new Tennis();

  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();
  tennis.player1Scores();

  tennis.player2Scores();
  tennis.player2Scores();

  expect(tennis.score()).toEqual("Game for player 1");
});

// ✅ Game SIN deuce (player 2)
it("jugador 2 anota 4 veces jugador 1 en cero => Game for player 2", () => {
  let tennis = new Tennis();
  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();
  expect(tennis.score()).toEqual("Game for player 2");
});

it("jugador 2 anota 4 y jugador 1 anota 1 => Game for player 2", () => {
  let tennis = new Tennis();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  tennis.player1Scores();

  expect(tennis.score()).toEqual("Game for player 2");
});

it("jugador 2 anota 4 y jugador 1 anota 2 => Game for player 2", () => {
  let tennis = new Tennis();

  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();
  tennis.player2Scores();

  tennis.player1Scores();
  tennis.player1Scores();

  expect(tennis.score()).toEqual("Game for player 2");
});
});