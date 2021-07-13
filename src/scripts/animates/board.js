

// class board constructor

// style = optional later


// texture instantiate with texture loaded 
// clean = boolean = when board has been used it accumulates debris
// set to false after 2 cuts
// contents = array of objects on surface 
// const POS = [x,y];
export function renderFace(c) {
  
  c.moveTo(100,0);
  c.lineTo(100,700);
  c.moveTo(200,0);
  c.lineTo(200,700);
  c.moveTo(300,0);
  c.lineTo(300,700);
  c.moveTo(400,0);
  c.lineTo(400,700);
  c.moveTo(500,0);
  c.lineTo(500,700);
  c.moveTo(600,0);
  c.lineTo(600,700);
  c.moveTo(700,0);
  c.lineTo(700,700);
  c.moveTo(800,0);
  c.lineTo(800,700);
  c.moveTo(0,100);
  c.lineTo(900,100);
  c.moveTo(0,200);
  c.lineTo(900,200);
  c.moveTo(0,300);
  c.lineTo(900,300);
  c.moveTo(0,400);
  c.lineTo(900,400);
  c.moveTo(0,500);
  c.lineTo(900,500);
  c.moveTo(0,600);
  c.lineTo(900,600);
  c.strokeStyle= "black";
  c.stroke();
  c.fillStyle = "rgba(229,136,38)";
  c.fillRect(100,600,650,133);
  c.moveTo(100,600);
  // c.strokeStyle = "rgba(229,136,38)";
  c.lineTo(300, 300);
  c.lineTo(900, 300);
  c.lineTo(750,600);
  c.stroke();

  c.fill();
  c.lineTo(750,733);
  c.lineTo(900,433);
  c.lineTo(900, 300);
  c.stroke();
  c.fill();
  // c.clearRect(160,160, 167.5, 105);
  //			x  y width height
  // c.beginPath();
  // c.arc(0, 0, 20, 0, 2*Math.PI, true);
  // c.strokeStyle = "blue";
  // c.lineWidth = 3;
  // c.stroke();
  // c.fillStyle = "grey";
  // c.fill();
  // // c.clear();
  // c.strokeStyle = "black";
  // c.strokeRect(160,160,167.5,105);
  
}

export function Board(c) {
  
    // this.pos = POS;
    this.contents = [];
    
    this.clean = true;
    this.c = c;
    this.face = renderFace(c); 
  
  
}
Board.prototype.chopDrop = function(pos) {
    
};

// clean method 

  // empty surface array



// collect method
  // upon cuts generates smootz object

