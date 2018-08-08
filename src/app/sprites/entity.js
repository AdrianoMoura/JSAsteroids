export default class Entity {
    constructor() {
        this.heading = -p5.PI/2
        this.rotation = 0
        this.pos = p5.createVector(p5.windowWidth/2, p5.windowHeight/2)
        this.vel = p5.createVector(0,0)
        this.accel = 0
    }

    draw() {
        this.move()
        this.render()
    }

    move() {
        this.heading += this.rotation;
        let force = p5.createVector(Math.cos(this.heading), Math.sin(this.heading))

        force.mult(this.accel);
        this.vel.add(force);

        this.pos.add(this.vel);

        if (this.pos.x > p5.windowWidth + this.size) {
            this.pos.x = 0 - this.size
        } else if (this.pos.x < 0 - this.size) {
            this.pos.x = p5.windowWidth + this.size
        } 
        
        if (this.pos.y > p5.windowHeight + this.size) {
            this.pos.y = 0 - this.size
        } else if (this.pos.y < 0 - this.size) {
            this.pos.y = p5.windowHeight + this.size
        } 
    }

    setRotation(rotation) {
        this.rotation = rotation
    }
}