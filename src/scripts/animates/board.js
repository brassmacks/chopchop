// require

// class board constructor

// style = optional later

// texture instantiate with texture loaded 
// clean = boolean = when board has been used it accumulates debris
  // set to false after 2 cuts
// contents = array of objects on surface 

// const POS = [x,y];
export function renderFace(ctx) {
  ctx.fillStyle = 'brown';
  ctx.fillRect(150,150,187.5,125);
  // ctx.clearRect(160,160, 167.5, 105);
  //			x  y width height
  ctx.beginPath();
  ctx.arc(250, 75, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.strokeRect(160,160,167.5,105);
  
}

export function Board(ctx) {
  
    // this.pos = POS;
    this.contents = [];
    
    this.clean = true;
    this.ctx = ctx;
    this.face = renderFace(ctx);
  
  
}


// clean method 

  // empty surface array



// collect method
  // upon cuts generates smootz object

