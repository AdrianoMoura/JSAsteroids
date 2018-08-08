import Entity from "./entity";
import Laser from "./laser";

export default class Player extends Entity {
    constructor(pos, size) {
        super()
        this.keyboardListener()

        this.lasers = []
        this.size = 10
        this.died = false
        this.dieTimeout = 1000
    }

    keyboardListener() {
        p5.keyPressed = () => {
            if (p5.keyCode === p5.LEFT_ARROW) {
                this.rotation = -.08
            }
            if (p5.keyCode === p5.RIGHT_ARROW) {
                this.rotation = .08
            }
            if (p5.keyCode === p5.UP_ARROW) {
                this.accel = .1
            }
            if (p5.key === ' ') {
                this.lasers.push(new Laser(this.pos, this.heading))
            }
            if (p5.keyCode === p5.ENTER) {
                this.warp()
            }
        }

        p5.keyReleased = () => {
            if (p5.keyCode === p5.LEFT_ARROW) {
                this.rotation = 0
            }
            if (p5.keyCode === p5.RIGHT_ARROW) {
                this.rotation = 0
            }
            if (p5.keyCode === p5.UP_ARROW) {
                this.accel = 0
            }
        }
    }

    warp() {
        this.pos = p5.createVector(p5.random(0, p5.windowWidth), p5.random(0, p5.windowHeight))
    }

    hits(asteroid) {
        if (!this.died) {
            const asteroidPos = asteroid.pos.copy()

            const dist = p5.dist(asteroidPos.x, asteroidPos.y, this.pos.x, this.pos.y)

            if (dist < this.size + asteroid.size) {
                this.die()
                asteroid.split()
            }
        }
    }

    die() {

        this.brokenParts = Array.from({ length: 4 }, () => ({
            pos: this.pos.copy(),
            vel: p5.createVector(p5.random(-1, 1), p5.random(-1,1)),
            heading: 0,
            rotation: p5.random(-0.1, 0.1),
            opacity: p5.random(.8, 1),
        }));

        this.died = true
        this.pos = p5.createVector(p5.windowWidth / 2, p5.windowHeight / 2)
        this.vel = p5.createVector(0, 0)
        this.accel = 0
        this.startDie = p5.millis()
    }

    render() {
        if (this.died) {
            if (p5.millis() - this.startDie > this.dieTimeout) {
                this.died = false
            }

            this.brokenParts.forEach(part => {
                part.pos.add(part.vel)
                part.heading += part.rotation
                p5.push()
                p5.stroke(255 * part.opacity)
                part.opacity-=.01
                p5.translate(part.pos.x, part.pos.y)
                p5.rotate(part.heading)
                p5.line(-this.size / 2, -this.size / 2, this.size / 2, this.size / 2)
                p5.pop()
            })

            return
        }

        p5.push()
        p5.noFill()
        p5.stroke(255)

        p5.translate(this.pos.x, this.pos.y)
        p5.rotate(this.heading + p5.PI / 2)
        p5.beginShape()

        p5.vertex(0, -this.size)
        p5.vertex(this.size, this.size)
        p5.vertex(0, this.size / 2)
        p5.vertex(-this.size, this.size)

        p5.endShape(p5.CLOSE)

        if (this.accel > 0 && p5.frameCount % 5 > 2) {
            p5.beginShape()

            p5.vertex(4, 8)
            p5.vertex(0, 15)
            p5.vertex(-4, 8)

            p5.endShape()
        }

        p5.pop()

        this.lasers.forEach(laser => laser.draw())
    }
}