import {Game} from "./scripts/game";
import * as p5 from 'p5';
import {hold} from './scripts/animates/knife';
import { Canvas, createCanvas } from "canvas";
console.log(p5);
let spine;

// if exporting multi objects from same file // importing
const weight = 2;
const gravity = 10;


const clickMap = document.querySelector("div.canvas");

const can = document.querySelector("div.p5-container"); 
console.log(can);


const w = window.innerWidth * 0.9;
const h = window.innerWidth * 0.8;


// const backD = loadImage('./chopics/block.png');

  window.setup = function() {
    let ske = window.createCanvas(window.innerWidth * 0.9, window.innerHeight * 0.8);
    spine = new hold(w * 0.7, h * 0.6, weight, gravity); 
    
    ske.parent('#p5-container');

    console.log("setup");
  }; 
  
  window.draw = function() {
  console.log("here");
    spine.update(mouseX, mouseY);
    spine.display(mouseX, mouseY);
  
  };





document.addEventListener("DOMContentLoaded", () => {
  
  // canvas.addEventListener('click', function (e) {
  //   chopPoint.x = e.x;
  //   chopPoint.y = e.y;
  //   console.log(chopPoint);
  //   // requestAnimationFrame
  // });
  
  
  
  
  
  
  
  
  



    // console.log("here");
    // repeat ^ on click
    // console.log(kx,ky);
    // knife([e.x,e.y]);
    // ctx.fillRect()});

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

      
      //   // compartmentalize into own file 
      // function hold(xpos, ypos, m, g) {
        
        //   console.log(xpos);
        //   this.x = xpos; 
        //   this.y = ypos;
        //   this.vx = 0;
        //   this.vy = 0;
        //   this.radius = 30;
        
        //   this.weight = weight;
        //   this.gravity = g;
        //   this.stiffness = 0.2;
        //   this.resistence = 0.7;
        
        //   this.update = function(gX, gY) {
          //     console.log(gx,gy);
          //     let frX = (gX - this.x) * this.stiffness;
          //     let ax = frX / this.mass;
          
          //     this.vx = this.resistence * (this.vx + ax);
          //     this.x += this.vx;
          
          //     let fY = (gY - this.y) * this.stiffness;
          //     fY += this.gravity;
          
          //     let ay = fY / this.mass;
          //     this.vy = this.resistence * (this.vy + ay);
          //     this.y += this.vy;
          
          //   };
          
          //   this.display  = function(nx, ny) {
            //     stroke(0);
            //     line(this.x, this.y, nx, ny);
            //   };
            
            
            // }
            
            
            
            
            
            
            
            // firstGame.print();
            
            // console.log(ctx);
            const chopPoint = {
              x: null,
              y: null
            };
            
            
            
            // can.addEventListener("mouseenter", function (e) {
              //   const grip = new hold(e.x, e.y, weight, gravity);
              
              //   console.log(grip);
              // });
              
          
            }
            );
            
            
            