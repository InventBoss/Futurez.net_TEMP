module.exports = {
  run: (document) => {
    const canvas = document.$refs.gameWindow;
    const context = canvas.getContext("2d");

    const loop = () => {
      context.fillStyle = "#141414";
      context.fillRect(0, 0, canvas.width, canvas.height);
    };
    setInterval(loop, 1);
  },
};
