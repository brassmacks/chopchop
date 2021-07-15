
import {Game} from "./scripts/game";
import {p5} from 'p5';
import { Canvas, loadImage } from "canvas";
// if exporting multi objects from same file // importing


const backD = loadImage('./chopics/block.png');


document.addEventListener("DOMContentLoaded", () => {

  // get this to work 
    // function sizeSet (x,y){
    //   ctx.canvas.width = x * 0.9;
    //   ctx.canvas.height = y * 0.7;
    //   return [ctx.canvas.width, ctx.canvas.height];
    // }
    

    const clickMap = document.querySelector("div.canvas");
    const canEl = document.querySelector("canvas#mycanvas"); 
    const ctx = canEl.getContext('2d');

  
  console.log(backD);

    // window.addEventListener('resize', sizeSet());
  
    
    
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



