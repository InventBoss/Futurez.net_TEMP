module.exports = {
  run: (document) => {
    const canvas = document.$refs.gameWindow;
    const ctx = canvas.getContext("2d");

    let squareLength = 400;

    let launchDirection = Math.floor(Math.random() * 4);

    canvas.width *= 5;
    canvas.height *= 5;

    let squareX = canvas.width / 2 - squareLength / 2;
    let squareY = canvas.height / 2 - squareLength / 2;

    let directionX = 0;
    let directionY = 0;

    if (launchDirection === 0) {
      directionY = 1;
      directionX = 1;
    } else if (launchDirection === 1) {
      directionX = 1;
      directionY = -1;
    } else if (launchDirection === 2) {
      directionX = -1;
      directionY = -1;
    } else {
      directionX = -1;
      directionY = 1;
    }

    const drawBox = () => {
      ctx.beginPath();
      ctx.rect(squareX, squareY, squareLength, squareLength);
      ctx.fillStyle = "#472000";
      ctx.fill();
      ctx.closePath();

      ctx.font = "100px JetbrainsMono";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(
        "Coming",
        squareX + squareLength / 2,
        squareY + squareLength / 2 - 10
      );
      ctx.fillText(
        "Soon",
        squareX + squareLength / 2,
        squareY + squareLength / 2 + 90
      );
    };

    const drawBackground = () => {
      ctx.beginPath();
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#5b2900";
      ctx.fill();
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      drawBox();

      squareX += directionX * 10;
      squareY += directionY * 10;

      if (squareX < 0 || squareX + squareLength > canvas.width) {
        directionX = -directionX;
      } else if (squareY < 0 || squareY + squareLength > canvas.height) {
        directionY = -directionY;
      }
    };
    setInterval(draw, 75);
  },
};
