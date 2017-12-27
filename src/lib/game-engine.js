const now = () => new Date().getTime();

const GameEngine = {
  start: (canvas, gameLoop) => {
    console.log("Initializing Rubber");

    const width = canvas.width;
    const height = canvas.height;

    const graphics = canvas.getContext("2d");

    let time = now();

    const tick = () => {
      // Clear screen
      graphics.fillStyle = "#000";
      graphics.fillRect(0, 0, width, height);

      const tickTime = now();
      const delta = tickTime - time;
      time = tickTime;

      if (gameLoop.update) gameLoop.update(delta)
      if (gameLoop.render) gameLoop.render(graphics)

      requestAnimationFrame(tick);
    }

    tick();
  }
}

export default GameEngine
