const now = () => new Date().getTime();

const FPSIndicator = () => {
  let time = 0;
  let frames = 0;
  let lastFrames = 0;

  return {
    countFrame: delta => {
      time += delta;
      frames++;
      if (time >= 1000) {
        time = 0;
        lastFrames = frames;
        frames = 0;
      }
    },
    render: ctx => {
      ctx.fillStyle = "#000e28";
      ctx.fillRect(5, 5, 35, 25);

      ctx.fillStyle = "#fff";
      ctx.fillText(`${lastFrames} fps`, 10, 20);
    }
  }
}


const GameEngine = {
  start: (canvas, gameLoop, { showFPS } = {}) => {
    console.log("Initializing Rubber");

    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    canvas.width = width;
    canvas.height = height;

    const graphics = canvas.getContext("2d");

    const fpsIndicator = FPSIndicator()

    let time = now();

    if (gameLoop.init) gameLoop.init(width, height)

    const tick = () => {
      // Clear screen
      graphics.fillStyle = "#000";
      graphics.fillRect(0, 0, width, height);

      const tickTime = now();
      const delta = tickTime - time;
      time = tickTime;

      if (gameLoop.update) gameLoop.update(delta)
      if (gameLoop.render) gameLoop.render(graphics)

      if (showFPS) {
        fpsIndicator.countFrame(delta)
        fpsIndicator.render(graphics)
      }

      requestAnimationFrame(tick);
    }

    tick();
  }
}

export default GameEngine
