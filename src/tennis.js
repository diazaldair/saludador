class Tennis {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  score() {
    const p1 = this.pointsToScore(this.player1Points);
    const p2 = this.pointsToScore(this.player2Points);
    return `${p1} - ${p2}`;
  }

  pointsToScore(points) {
    if (points === 0) return "Love";
    if (points === 1) return "15";
    if (points === 2) return "30";
    if (points === 3) return "40";
    return "Game"; // por ahora NO lo usamos, luego lo afinamos
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }
}

export default Tennis;