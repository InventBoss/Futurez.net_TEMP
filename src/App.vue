<template>
  <img src="./assets/cat.png" style="width: calc(10vw + 10vh)" />

  <GameWindow />
</template>
<script>
import GameWindow from "./components/GameWindow.vue";

export default {
  name: "App",
  components: {
    GameWindow,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
