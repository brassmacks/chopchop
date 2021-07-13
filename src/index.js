import { Game } from "./scripts/game";
// if exporting multi objects from same file // importing

document.addEventListener
(
  "DOMContentLoaded", () => {
    const clickMap = document.querySelector("div.canvas");
    const canEl = document.querySelector("canvas#mycanvas"); 
    const ctx = canEl.getContext('2d');
    ctx.canvas.width = 900;
    ctx.canvas.height = 600;
    
    ctx.scale(1,0.75);
    let firstGame = new Game(ctx);
    firstGame.print();
    console.log(ctx);
    const chopPoint = {
      x: null,
      y: null
    };
    clickMap.addEventListener('click', function(e)  {
      chopPoint.x = e.x;
      chopPoint.y = e.y;
      console.log(chopPoint );
      // requestAnimationFrame
    });
  }
);



