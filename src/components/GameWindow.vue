<template>
  <div style="width: 100%; height: 100%">
    <ul
      style="
        text-align: left;
        font-size: calc(100% + 3.5vw);
        position: absolute;
        top: 1%;
        left: 10%;
        overflow: hidden;
      "
    >
      test
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
