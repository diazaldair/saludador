class Tennis {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  score() {
  // Deuce: ambos >= 3 y empatan
  if (this.player1Points >= 3 && this.player2Points >= 3 && this.player1Points === this.player2Points) {
    return "Deuce";
  }

  // Advantage: ambos >= 3 y diferencia de 1
  if (this.player1Points >= 3 && this.player2Points >= 3) {
    if (this.player1Points === this.player2Points + 1) return "Advantage player 1";
    if (this.player2Points === this.player1Points + 1) return "Advantage player 2";
  }

  const p1 = this.pointsToScore(this.player1Points);
  const p2 = this.pointsToScore(this.player2Points);
  return `${p1}-${p2}`;
}

  pointsToScore(points) {
    if (points === 0) return "Love";
    if (points === 1) return "15";
    if (points === 2) return "30";
    if (points === 3) return "40";
    return "Game";
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }
}

export default Tennis;