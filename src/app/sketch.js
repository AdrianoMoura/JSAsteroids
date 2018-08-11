import AsteroidsCollection from './collections/AsteroidsCollection';
import GameController from './gameController';

const sketch = (p5) => {
    window.p5 = p5

    p5.preload = () => {
        window.font = p5.loadFont('Hyperspace.otf');
    }

    // Setup function
    // ======================================
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight)
        window.gameController = new GameController()
        window.asteroidsCollection = new AsteroidsCollection(5)
        p5.textFont(font)

        p5.keyPressed = () => {
            if (p5.keyCode === p5.ENTER) {
                gameController.gameStart()
            }
        }
    }

    // Draw function
    // ======================================
    p5.draw = () => {
        p5.background(0)

        asteroidsCollection.draw()

        p5.textSize(28);
        p5.fill(255);
        p5.textAlign(p5.LEFT);
        p5.text(gameController.score, 100, 100);

        p5.textSize(28);
        p5.fill(255);
        p5.textAlign(p5.CENTER);
        p5.text(gameController.maxScore, p5.windowWidth / 2, 100);

        for (let i = 0; i < gameController.lifes; i++) {
            p5.push()
            p5.noFill()
            p5.stroke(255)

            p5.translate(25 * i + 108, 130)
            p5.beginShape()

            p5.vertex(0, -10)
            p5.vertex(10, 10)
            p5.vertex(0, 10 / 2)
            p5.vertex(-10, 10)

            p5.endShape(p5.CLOSE)
            p5.pop()
        }

        if (gameController.isStarted) {
            dustCollection.draw()
            player.draw()

            if (asteroidsCollection.asteroids.length === 0) {
                gameController.nextLevel()
                return
            }

            asteroidsCollection.asteroids.forEach(asteroid => {

                player.hits(asteroid)

                player.lasers.every((laser, index) => {
                    if (asteroid.hits(laser)) {
                        player.lasers.splice(index, 1)
                        return false
                    }

                    laser.expire() && player.lasers.splice(index, 1)
                    return true
                })
            })
        } else if (gameController.gameOver) {
            p5.textSize(48);
            p5.fill(255);
            p5.textAlign(p5.CENTER);
            p5.text('GAME OVER', p5.windowWidth / 2, p5.windowHeight / 2 - 200);
        } else {
            p5.textSize(48);
            p5.fill(255);
            p5.textAlign(p5.CENTER);
            p5.text('START', p5.windowWidth / 2, p5.windowHeight / 2 - 200);
        }
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
}

export default sketch