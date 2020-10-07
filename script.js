class spelElement {
    x;
    y;

    constructor (_x, _y) {
        this.x = _x;
        this.y = _y;
    }
}



class Bal extends spelElement {
    x;
    y;
    speedX;
    speedY;
    diameter;

    constructor (_x, _y, _speedX, _speedY) {
        super(_x, _y);
        this.speedX = _speedX;
        this.speedY = _speedY;
        this.diameter = 80;
    }
    show () {
        noStroke();
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
    update () {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;

        if (this.x >= 1200 || this.x <= 80) {
            this.speedX = -1 * this.speedX;
        }
        if (this.y >= 640 || this.y <= 80 {
            this.speedY = -1 * this.speedY;
        }
    }
}

class Blok extends spelElement {
    x;
    y;
    breedte;
    hoogte;

    constructor (_x, _y, _breedte, _hoogte) {
        super(_x, _y);
        this.breedte = _breedte;
        this.hoogte = _hoogte;
    }

<<<<<<< HEAD
    show () {
        rect(this.x, this.y, this.breedte, this.hoogte);
    }
}

=======
  // teken een cirkel
  ellipse(50,50,80,80);
}
>>>>>>> bfb9ebd0d9a59f86370a028535168fd56c6677bd
