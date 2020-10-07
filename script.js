class Bal {
    x;
    y;
    speedX;
    speedY;
    diameter;

    constructor (_x, _y, _speedX, _speedY) {
        this.x = _x;
        this.y = _y;
        this.speedX = _speedX;
        this.speedY = _speedY;
        this.diameter = _diameter;
    }
    show () {
        noStroke();
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
    update () {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;

        /* 
        if (x blablabla) {
            this.speedX = -1 * this.speedX;
        }
        if (y blablabla) {
            this.speedY = -1 * this.speedY;
        }
        */
    }
}