import Entity from "./entity";
import Laser from "./laser";

export default class Player extends Entity {
    constructor() {
        super()
        this.keyboardListener()

        this.lasers = []
        this.radius = 10
        this.died = false
        this.dieTimeout = 2000
        this.isSafe = true
        this.safeCheck = 0
    }

    keyboardListener() {
        p5.keyPressed = () => {
            if (p5.keyCode === p5.LEFT_ARROW) {
                this.rotate('LEFT')
            }
            if (p5.keyCode === p5.RIGHT_ARROW) {
                this.rotate('RIGHT')
            }
            if (p5.keyCode === p5.UP_ARROW) {
                this.thrust()
            }
            if (p5.key === ' ') {
                this.shoot()
            }
            if (p5.keyCode === p5.ENTER) {
                this.warp()
            }
        }

        p5.keyReleased = () => {
            if (p5.keyCode === p5.LEFT_ARROW || p5.keyCode === p5.RIGHT_ARROW) {
                this.rotate()
            }
            if (p5.keyCode === p5.UP_ARROW) {
                this.thrust(false)
            }
        }
    }

    shoot() {
        soundController.laser()
        this.lasers.push(new Laser(this.pos, this.heading))
    }

    rotate(direction) {
        if (direction === 'LEFT')
            this.rotation = -.08
        else if (direction === 'RIGHT')
            this.rotation = .08
        else
            this.rotation = 0
    }

    thrust(accel = true) {
        this.accel = accel ? .1 : 0
    }

    warp() {
        this.pos = p5.createVector(p5.random(0, p5.windowWidth), p5.random(0, p5.windowHeight))
    }

    hits(asteroid) {
        const asteroidPos = asteroid.pos.copy()

        const dist = p5.dist(asteroidPos.x, asteroidPos.y, this.pos.x, this.pos.y)

        if (dist < this.radius + asteroid.radius) {
            if (!this.died) {
                this.die()
                asteroid.split()
            }
        }

        // Isn't safe to respawn?
        if (dist < this.radius + asteroid.radius * 2) {
            this.isSafe = false
            clearTimeout(this.safeCheck)
            this.safeCheck = 0
            // Set one seconds respawn delay if the zone is to dangerously, this will prevent to player respawn and die instantly
            this.safeCheck = setTimeout(() => this.isSafe = true, 2000)
        }
    }

    die() {
        gameController.removeLife()
        this.brokenParts = Array.from({ length: 4 }, () => ({
            pos: this.pos.copy(),
            vel: p5.createVector(p5.random(-1, 1), p5.random(-1, 1)),
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
            this.died = !(p5.millis() - this.startDie > this.dieTimeout && this.isSafe)

            // Draw broken parts
            this.brokenParts.forEach(part => {
                part.pos.add(part.vel)
                part.heading += part.rotation
                p5.push()
                p5.stroke(255 * part.opacity)
                part.opacity -= .01
                p5.translate(part.pos.x, part.pos.y)
                p5.rotate(part.heading)
                p5.line(-this.radius / 2, -this.radius / 2, this.radius / 2, this.radius / 2)
                p5.pop()
            })

            return
        }

        if (this.accel > 0)
            soundController.thrust()

        // Draw ship
        p5.push()
        p5.noFill()
        p5.stroke(255)

        p5.translate(this.pos.x, this.pos.y)
        p5.rotate(this.heading + p5.PI / 2)
        p5.beginShape()

        p5.vertex(0, -this.radius)
        p5.vertex(this.radius, this.radius)
        p5.vertex(0, this.radius / 2)
        p5.vertex(-this.radius, this.radius)

        p5.endShape(p5.CLOSE)

        // Draw fire when accel is greaten than 0
        if (this.accel > 0 && p5.frameCount % 5 > 2) {
            p5.beginShape()

            p5.vertex(this.radius * .4, this.radius * .8)
            p5.vertex(0, this.radius * 1.5)
            p5.vertex(-this.radius * .4, this.radius * .8)

            p5.endShape()
        }

        p5.pop()

        this.lasers.forEach(laser => laser.draw())
    }
}