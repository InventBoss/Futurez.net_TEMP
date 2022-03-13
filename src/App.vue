<template>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://futurez.net" />
  <meta property="og:title" content="Futurez - Become a Capitalist" />
  <meta
    property="og:description"
    content="Welcome to Futurez.net! For all your offplanet colonization needs."
  />
  <meta
    property="og:image"
    content="https://futurez.net/img/cat.5e8d8104.png"
  />
  <title>Futurez - Become a Capitalist</title>
  <div
    ref="gameDiv"
    style="
      position: absolute;
      display: inline-block;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <GameTitle />
    <canvas ref="gameWindow" style="width: 50vw; height: 50vh"></canvas>
  </div>
  <LowerBar />
</template>
<script>
import GameTitle from "./components/GameTitle.vue";
import LowerBar from "./components/LowerBar.vue";
const gameFile = require("./js/game.js");

export default {
  name: "App",
  component: {
    GameTitle,
    LowerBar,
  },
  methods: {},
  data() {
    return {};
  },
  async mounted() {
    gameFile.run(this);
  },
  components: { LowerBar, GameTitle },
};
</script>
<style>
#app {
  height: 100vh;
  background-image: url(../src/assets/MarsBackground.png);
  background-size: 45%;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
}
@font-face {
  font-family: "JetbrainsMono";
  src: local("JetbrainsMono"), url(../src/assets/fonts/JetBrainsMono-Bold.woff2);
}
</style>
