import {p5} from 'p5';

export class hold {
    constructor(xpos, ypos, m, g) {

        // console.log(xpos);
        this.x = xpos;
        this.y = ypos;
        this.vx = 0;
        this.vy = 0;
        this.radius = 30;

        this.weight = m;
        this.gravity = 10;
        this.stiffness = 0.2;
        this.resistence = 0.7;

        this.update = function (gX, gY) {
            // console.log(gX, gY);
            
            // debugger
            let frX = (gX - this.x) * this.stiffness;
            let ax = frX / this.weight;

            this.vx = this.resistence * (this.vx + ax);
            this.x += this.vx;

            let fY = (gY - this.y) * this.stiffness;
            fY += this.gravity;

            let ay = fY / this.weight;
            this.vy = this.resistence * (this.vy + ay);
            this.y += this.vy;

        };

        this.display = function (nx, ny) {
            noStroke();
            rect(this.x,this.y, 60,250);
            stroke('rgb(10,255,40)');
            line(this.x, this.y, nx, ny);
        };


    }
}



//methods 

// raise(possibly variable)
    // increase y of handTether( ideally will move relative to tracked mouse movement, get it working with a fixed amount first first )

// drop
    // calls chopChop animation(pos)
    // pointFloat = y = 0
    // y / z angle set to 90
    // possibly call hold position