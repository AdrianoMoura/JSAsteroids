import AsteroidsCollection from './collections/AsteroidsCollection';
import DustCollection from './collections/DustCollection';
import Player from './sprites/player';

export default class GameController {
    constructor() {
        this.isStarted = false
        this.gameOver = false
        this.calledNextLevel = false
        this.score = 0
        this.maxScore = 0
        this.lifes = 3
        this.totalAsteroids = 5
    }

    gameStart() {
        this.isStarted = true
        this.gameOver = false
        window.asteroidsCollection = new AsteroidsCollection(this.totalAsteroids)
        window.dustCollection = new DustCollection()
        window.player = new Player()
    }

    doGameOver() {
        this.score = 0
        this.gameOver = true
        this.isStarted = false

        p5.keyPressed = () => {
            if (p5.keyCode === p5.ENTER) {
                this.gameStart()
            }
        }
    }

    removeLife() {
        this.lifes--

        if (this.lifes === 0) {
            this.doGameOver()
        }
    }

    nextLevel() {
        if (!this.calledNextLevel) {
            this.calledNextLevel = true
            setTimeout(() => {
                // Prevent nextLevel to be called many times
                this.calledNextLevel = false

                // Give 1k points
                this.makePoint(0, 1000)

                // Increase the number of asteroids
                this.totalAsteroids++

                // Restart
                window.asteroidsCollection = new AsteroidsCollection(this.totalAsteroids)
                window.player = new Player()
            }, 1000);
        }
    }

    makePoint(size, increase = 0) {
        switch (size) {
            case 1:
                this.score += 100
                break
            case 2:
                this.score += 50
                break
            case 3:
                this.score += 20
                break
        }

        this.score += increase

        // Each 10k points the player won a new life
        if (this.score % 10000 === 0) {
            this.lifes++
        }

        // Save the greatests score
        if (this.score > this.maxScore) {
            this.maxScore = this.score
        }
    }
}