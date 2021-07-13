// require 
// const clickMap = document.querySelector("div.canvas");
// const canEl = document.querySelector("canvas#mycanvas");
// const ctx = canEl.getContext('2d');
// const canHi = canEl.height;
// const canWi = canEl.width;






const Knife = function() {
  
  const wid = 15;
  let pntx = canWi * 0.8;
  let pnty = canHi * 0.2;
  
  let hanx = canWi * 0.8;
  let hany = canHi * 0.6;
  
    const relativeTurn = function([x1, y1], length, angle) {
      angle *= Math.PI / 180;
    
      let x2 = x1 + length * Math.cos(angle);
      let y2 = y1 + length * Math.sin(angle);
      return [x2, y2];
      // consider refactoring to return angle cos, sin for return path
    };
  
  this.point = [pntx,pnty];
  this.handle = [hanx, hany];
  this.blade = [this.point, this.handle];
  this.hilt = function() {
    let inBot = relativeTurn(this.handle, wid, 90);
    let inTop = relativeTurn(this.hilt[inBot], this.spine.length * 0.3, 90);
    let outTop = relativeTurn(inTop, wid, 90);
    let outBot = relativeTurn(outTop, this.spine.length * 0.3, 90);
  };
  // r will change, it is currently for rendering purposes only
  // it represents half the width of the knife objec
  };


// rendering fodder 
//   r = 37.5 
//   let pi = Math.PI;
//   ctx = can.getContext('2d');
//   ctx.canvas.height = 500;
//   ctx.canvas.width = 1100;
//   ctx.fillStyle = "rgba(5,5,5,1)"


// click and hold

// can.addEventListener('mousedown', function(e){
//   console.log(e.x, e.y);
// }); 

// click release 
// can.addEventListener('mouseup', function(e){
//   console.log(e.x, e.y);
// }); 

// cursor on screenn 
can.addEventListener('mouseenter', function (e) {
  let kx = e.x;
  let ky = e.y;
  console.log("here");
  // repeat ^ on click
  console.log(kx, ky);
  // knife();
  // ctx.fillRect()
});


// document.addEventListener("keypress", function (e) {
//   let x = (can.height * 0.66);
//   const xS = { "a": x - 50, "s": x, "d": x + 50 };
//   let y = can.width * 0.33;
//   let flash;
//   let c1 = "rgb(20,30,250)";
//   let c2 = "rgb(40,250,25)";
//   let c3 = "rgb(250,15,55)";

//   switch (e.key) {
//     case "a":
//       x -= 50;
//       flash = c1;
//       break;
//     case "s":
//       flash = c2;
//       break;
//     case "d":
//       flash = c3;
//       x += 50;
//       break;
//     default:
//       flash = null;
//       console.log(flash);
//     // call mishap function
//   }
//   console.log(flash);

//   ctx.fillStyle = flash || "transparent";
//   ctx.fillRect(x, y, 50, 50);

//   document.addEventListener('keyup', function (e) {
//     if (["a", "s", "d"].includes(e.key)) {
//       let xC = xS[e.key];
//       ctx.clearRect(xC, y, 50, 50);
//     }
//   }); 

// });

