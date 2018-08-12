import AsteroidsCollection from './collections/AsteroidsCollection';
import Player from './sprites/player';

export default class GameController {
    constructor() {
        this.isStarted = false
        this.gameOver = false
        this.calledNextLevel = false
        this.score = 0
        this.maxScore = localStorage.getItem('maxscore') || 0
        this.lifes
        this.totalAsteroids
    }

    gameStart() {
        this.isStarted = true
        this.totalAsteroids = 5
        this.lifes = 3
        this.score = 0
        this.gameOver = false
        window.player = new Player()
        window.asteroidsCollection = new AsteroidsCollection(this.totalAsteroids)
    }

    doGameOver() {
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

        // Save the greatests score
        if (this.score > this.maxScore) {
            this.maxScore = this.score
            localStorage.setItem('maxscore', this.maxScore)
        }
    }
}