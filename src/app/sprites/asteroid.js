import Entity from "./entity";

export default class Asteroid extends Entity {
    constructor(pos, size) {
        super()

        this.pos = pos ? pos.copy() : p5.createVector(p5.random(p5.windowWidth), p5.random(p5.windowHeight))
        this.size = size || p5.random(40, 80)
        this.vel = p5.createVector(p5.random(-3, 3), p5.random(-3, 3))
        this.vel.mult(p5.map(this.size, 1, 60, 1, .8))
        // this.rotation = p5.random(-0.03, 0.03)

        this.sides = p5.floor(p5.random(8, 15))
        this.shape = Array.from({ length: this.sides }, () => p5.random(-this.size * .3, this.size * .3));
    }

    split() {
        let newAsteroids;

        if (this.size > 10)
            newAsteroids = [
                new Asteroid(this.pos, this.size / 2),
                new Asteroid(this.pos, this.size / 2)
            ]

        window.dustCollection.addDust(this.pos, this.size)
        window.asteroidsCollection.splitAsteroid(this, newAsteroids);
    }

    hits(laser) {
        const laserPos = laser.pos.copy()

        const dist = p5.dist(laserPos.x, laserPos.y, this.pos.x, this.pos.y)

        if (dist < this.size + laser.size) {
            this.split()
            return true
        }

        return false
    }

    render() {
        p5.push()
        p5.noFill()
        p5.stroke(255)
        
        p5.translate(this.pos.x, this.pos.y)
        p5.beginShape()

        this.shape.forEach((v, i) => {
            let angle = p5.map(i, 0, this.sides, 0, p5.TWO_PI)
            let size = this.size + v
            p5.vertex(size * p5.cos(angle), size * p5.sin(angle))
        })

        p5.endShape(p5.CLOSE)
        p5.pop()
    }
}