import AsteroidsCollection from './collections/AsteroidsCollection';
import DustCollection from './collections/DustCollection';
import Player from './sprites/player';


const sketch = (p5) => {
    window.p5 = p5

    // Setup function
    // ======================================
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight)

        window.asteroidsCollection = new AsteroidsCollection(5)
        window.dustCollection = new DustCollection()
        window.player = new Player()
    }

    // Draw function
    // ======================================
    p5.draw = () => {
        p5.background(0)

        window.asteroidsCollection.draw()
        window.dustCollection.draw()
        window.player.draw()

        window.asteroidsCollection.asteroids.forEach(asteroid => {

            window.player.hits(asteroid)

            window.player.lasers.every((laser, index) => {
                if (asteroid.hits(laser)) {
                    window.player.lasers.splice(index, 1)
                    return false
                }
                if (laser.expire()) {
                    window.player.lasers.splice(index, 1)
                }
                return true
            })
        })
    }

    p5.windowResized = () =>  {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
}

export default sketch