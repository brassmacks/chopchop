
import {Game} from "./scripts/game";
import {p5} from 'p5';
import { Canvas, loadImage } from "canvas";

// if exporting multi objects from same file // importing


const backD = loadImage('./chopics/block.png');


document.addEventListener("DOMContentLoaded", () => {

  
  let spine;
  let gravity = 10;
  let weight = 2;

  const grip = new hold(0.0, width / 2, weight, gravity);


  // get this to work 
    // function sizeSet (x,y){
    //   ctx.canvas.width = x * 0.9;
    //   ctx.canvas.height = y * 0.7;
    //   return [ctx.canvas.width, ctx.canvas.height];
    // }
    

  const clickMap = document.querySelector("div.canvas");
  const canEl = document.querySelector("canvas#mycanvas"); 
  const ctx = canEl.getContext('2d');
    
    // let firstGame = new Game(ctx);
    

      // refactor for future implementations
      // will take a function that returns what to draw at different 
      // stages of game 

  function draw() {
    grip.update(mouseX,mouseY);
    grip.display(mouseX,mouseY);
  }

    // compartmentalize into own file 
  function hold(xpos, ypos, m, g) {
  
    this.x = xpos; 
    this.y = ypos;
    this.vx = 0;
    this.vy = 0;
    this.radius = 30;

    this.weight = w;
    this.gravity = g;
    this.stiffness = 0.2;
    this.resistence = 0.7;

    this.update = function(gX, gY) {

      let frX = (gX - this.x) * this.stiffness;
      let ax = frX / this.mass;
      
      this.vx = this.resistence * (this.vx + ax);
      this.x += this.vx;

      let fY = (gY - this.y) * this.stiffness;
      fY += this.gravity;

      let ay = fY / this.mass;
      this.vy = this.resistence * (this.vy + ay);
      this.y += this.vy;

    };

    this.display  = function(nx, ny) {
      stroke(0);
      line(this.x, this.y, nx, ny);
    };


  }







    // firstGame.print();
    // console.log(ctx);
    // const chopPoint = {
    //   x: null,
    //   y: null
    // };





    clickMap.addEventListener('click', function(e)  {
      chopPoint.x = e.x;
      chopPoint.y = e.y;
      console.log(chopPoint );
      // requestAnimationFrame
    });
  }
);



