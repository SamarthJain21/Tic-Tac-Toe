import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
  //   console.log("new game");
  onRestartClick();
});
// console.log(game.turn);
// game.nextTurn();
// console.log(game.turn);
// console.log(game.board);
// game.makeMove(3);
// console.log(game.board);
// game.nextTurn();
// game.makeMove(4);
// console.log(game.board);

// gameView.updateBoard(game);

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    // console.log(tile.dataset.index);
    onTileClicked(tile.dataset.index);
  });
});

function onTileClicked(i) {
  game.makeMove(i);
  gameView.updateBoard(game);
}

function onRestartClick() {
  game = new Game();
  gameView.updateBoard(game);
}

gameView.updateBoard(game);
