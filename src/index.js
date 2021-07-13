import { Game } from "./scripts/game";
// if exporting multi objects from same file // importing

document.addEventListener
(
  "DOMContentLoaded", () => {
    const canEl = document.querySelector("canvas#mycanvas"); 
    const ctx = canEl.getContext('2d');
    let firstGame = new Game(ctx);
    firstGame.print();
  }
);

// function popUp() {
//   setTimeout(alert("maybe?"), 3000);
// }
