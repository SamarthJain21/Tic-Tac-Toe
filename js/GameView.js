export default class GameView {
  constructor() {
    console.log("init game view");
  }
  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      //   tile.textContent = game.board[i];

      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";
      //   console.log(tileType);
      tile.innerHTML = `<span class = "${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      tile.classList.remove("tile-winner");
      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner");
      }
    }
  }
  updateTurn(game) {
    let playerX = document.querySelector(".player-x");
    let playerO = document.querySelector(".player-o");
    playerX.classList.remove("active");
    playerO.classList.remove("active");

    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      playerO.classList.add("active");
    }
  }
}
