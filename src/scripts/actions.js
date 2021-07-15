// require 
// const clickMap = document.querySelector("div.canvas");
// const canEl = document.querySelector("canvas#mycanvas");
// const ctx = canEl.getContext('2d');
// const canHi = canEl.height;
// const canWi = canEl.width;






const Knife = function(ctx, point=null, handle=null) {
  
  if (!point) point = [(canWi * 0.8), (canHi * 0.2)];
  if (!handle) handle = [(canWi * 0.8), (canHi * 0.6)];

  let [pntx, pnty] = point;
  let [hanx, hany] = handle;
  
  const wid = 15;
  
  
    const _relativeTurn = function([x1, y1], length, angle) {
      angle *= Math.PI / 180;
    
      let x2 = x1 + length * Math.cos(angle);
      let y2 = y1 + length * Math.sin(angle);
      return [x2, y2];
      // consider refactoring to return angle cos, sin for return path
    };
  
  


    this.bladeLeng = Math.sqrt(Math.pow((hanx - pntx),2) + Math.pow((hany - pnty),2));
    
    let inBot = _relativeTurn([hanx, hany], wid, 0);
    let inTop = _relativeTurn([inBot[0], inBot[1]], -this.bladeLeng * 0.6, 90);
    let outTop = _relativeTurn(inTop, -2 * wid, 0);
    let outBot = _relativeTurn(outTop, this.bladeLeng * 0.6, 90);
    
    this.hilt = [inBot, inTop, outTop, outBot];



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

