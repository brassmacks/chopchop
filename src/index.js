// import {Game} from "./scripts/game";
import * as p5 from 'p5';
let chopper;
import {hold} from './scripts/animates/knife';
import audioOn from '../chopics/audioOn.png';
let img;
let gripped = false;

// window.preload= function() {
//   img = window.loadImage('./chopics/buttons/Button.png');
  
// };

// const buttons = () => {


// }

let ske;


window.setup = function () {
  
  const w = window.innerWidth * 0.9;
  const h = window.innerWidth * 0.8;


  if (!ske) {
    ske = window.createCanvas(w* 0.8, h*0.65);
    spine = new hold(w * 2, h * 2, weight, gravity);
    ske.parent('#p5-container');
    
  } else 
      {
    ske.width = w * 0.8;
    ske.height = h * 0.65;
  }



};


let spine;

let weight = 2;
let gravity = 110;

const chopPoint = {
  x: null,
  y: null
};



// window.addEventListener('resize', () => {
//   setup();
// });

window.addEventListener('mousedown', (e)=> {
  let clix = e.x;
  let cly = e.y;
  gravity -= 100;
  console.log(clix,cly);
});

window.addEventListener('mouseup', (e)=>{
  chopPoint.x = e.x;
  chopPoint.y = e.y;
  gravity += 100;
});




  
  window.draw = function() {
    clear();
    
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
    
  
  
  


  // function draw() {
  //   image(img, 0, 0);
  //   image(img, 0, height/2)
  // }

    // console.log("setup");
  
  
  
  
  



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
            
            
            