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
  <img
    src="./assets/MarsBackground.png"
    alt="The background photo of mars"
    style="width: 100vw; height: 99vh"
  />
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
    const gameFile = require("./js/game.js");
    gameFile.run(this);
  },
  components: { LowerBar, GameTitle },
};
</script>
<style>
#app {
  height: 100vw;
}
@font-face {
  font-family: "JetbrainsMono";
  src: local("JetbrainsMono"), url(../src/assets/fonts/JetBrainsMono-Bold.woff2);
}
</style>
