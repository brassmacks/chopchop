// require 




// key down and hold = 
// Tracking mouse 

// let knife = function(point) {
//   let px, py = point;
//   r = 37.5 
//   let pi = Math.PI;
//   ctx = can.getContext('2d');
//   ctx.canvas.height = 500;
//   ctx.canvas.width = 1100;
//   ctx.fillStyle = "rgba(5,5,5,1)"
//   let x = [300,37.5]
//   
//   ctx.fillRect(x[0],y[0],x[1],y[1]);
//   console.log(pi);
// }


// click and hold 
// can.addEventListener('mousedown', function(e){
//   console.log(e);
// }); 

can.addEventListener('mouseenter', function (e) {
  let kx = e.x;
  let ky = e.y;
  console.log("here");
  // repeat ^ on click
  console.log(kx, ky);
  // knife([e.x,e.y]);
  // ctx.fillRect()
});


document.addEventListener("keypress", function (e) {
  let x = (can.height * 0.66);
  const xS = { "a": x - 50, "s": x, "d": x + 50 };
  let y = can.width * 0.33;
  let flash;
  let c1 = "rgb(20,30,250)";
  let c2 = "rgb(40,250,25)";
  let c3 = "rgb(250,15,55)";

  switch (e.key) {
    case "a":
      x -= 50;
      flash = c1;
      break;
    case "s":
      flash = c2;
      break;
    case "d":
      flash = c3;
      x += 50;
      break;
    default:
      flash = null;
      console.log(flash);
    // call mishap function
  }
  console.log(flash);

  ctx.fillStyle = flash || "transparent";
  ctx.fillRect(x, y, 50, 50);

  document.addEventListener('keyup', function (e) {
    if (["a", "s", "d"].includes(e.key)) {
      let xC = xS[e.key];
      ctx.clearRect(xC, y, 50, 50);
    }
  });

});

