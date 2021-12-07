<template>
  <body />
  <div class="box" source="height: 100vw">
    <img
      alt="Is this a background? Yes!"
      src="./assets/background.png"
      style="width: 100%; height: 100%"
    />
  </div>
  <HelloWorld />
</template>
<script>
document.title = "Futurez - Become a Capitalist";
import HelloWorld from "./components/GameWindow.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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

body {
  background-color: rgb(215, 216, 60);
  margin: 0px;
}
</style>
