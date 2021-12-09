<template>
  <div
    style="
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: calc(0.6vw + 1.8vh);
      margin: 0 auto;
      height: 100%;
      width: 100%;
    "
  >
    <h1 style="color: #033300; text-align: center">Welcome to my Website!</h1>
    <b>There's gonna be a website here, but for now you have to wait! <br /></b>

    <b
      ><a
        href="https://github.com/InventBoss/Futurez.net"
        style="color: #033300"
        target="_blank"
        rel="noopener"
        >Github</a
      >
      <b> - </b>
      <a
        href="https://twitter.com/Invent_Boss"
        style="color: #033300"
        target="_blank"
        rel="noopener"
      >
        Twitter
      </a></b
    >
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
