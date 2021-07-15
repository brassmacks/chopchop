import {Game} from "./scripts/game";
import * as p5 from 'p5';
let chopper;
import {hold} from './scripts/animates/knife';


function preload() {
  chopper = window.laodModel(kanife);
}

let spine;

// if exporting multi objects from same file // importing
let weight = 2;
let gravity = 110;

const chopPoint = {
  x: null,
  y: null
};

window.addEventListener('mousedown', (e)=> {
  let clix = e.x;
  let cly = e.y;
  gravity -= 100;
});

window.addEventListener('mouseup', (e)=>{
  chopPoint.x = e.x;
  chopPoint.y = e.y;
  gravity += 100;
});

const w = window.innerWidth * 0.9;
const h = window.innerWidth * 0.8;


// const backD = loadImage('./chopics/block.png');

  window.setup = function() {
    

    let ske = window.createCanvas(window.innerWidth * 0.9, window.innerHeight * 0.8);
    spine = new hold(w * 2, h * 2, weight, gravity); 
    
    ske.parent('#p5-container');

    // console.log("setup");
  }; 
  
  window.draw = function() {
    clear();

  // console.log("here");
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

    
            
            
            
        
  
            
            
            
            // can.addEventListener("mouseenter", function (e) {
              //   const grip = new hold(e.x, e.y, weight, gravity);
              
              //   console.log(grip);
              // });
              
          
            }
            );
            
            
            