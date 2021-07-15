
import {Game} from "./scripts/game";
import {p5} from 'p5';
import { Canvas, loadImage } from "canvas";

// if exporting multi objects from same file // importing


const backD = loadImage('./chopics/block.png');


document.addEventListener("DOMContentLoaded", () => {


  let spine;
  let gravity = 10;
  let weight = 2;

  const clickMap = document.querySelector("div.canvas");
  const can = document.querySelector("canvas#mycanvas"); 
  const ctx = can.getContext('2d');
  
  can.addEventListener("mouseenter", function (e) {
    const grip = new hold(e.x, e.y, weight, gravity);
    
    console.log(grip);
    let kx = e.x;

    let ky = e.y;
    // console.log("here");
    // repeat ^ on click
    // console.log(kx,ky);
    // knife([e.x,e.y]);
    // ctx.fillRect()


    
  });
  // get this to work 
    // function sizeSet (x,y){
    //   ctx.canvas.width = x * 0.9;
    //   ctx.canvas.height = y * 0.7;
    //   return [ctx.canvas.width, ctx.canvas.height];
    // }
    

    
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
    console.log(xpos);
    this.x = xpos; 
    this.y = ypos;
    this.vx = 0;
    this.vy = 0;
    this.radius = 30;

    this.weight = weight;
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



