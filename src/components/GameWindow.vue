<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: calc(0.6vw + 1.8vh);
    "
  >
    <h1 style="color: #033300">Welcome to my Website!</h1>
    <ul style="list-style-type: none">
      <li>
        <b>There's gonna be a website here, but for now you have to wait! </b>
      </li>
      <li>
        <a
          href="https://github.com/InventBoss/Futurez.net"
          style="color: #033300"
          target="_blank"
          rel="noopener"
        >
          <br />
          Github
        </a>
        <b> - </b>
        <a
          href="https://twitter.com/Invent_Boss"
          style="color: #033300"
          target="_blank"
          rel="noopener"
        >
          Twitter
        </a>
      </li>
    </ul>
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
