<template lang="">
  <input
    @change="updateTitle()"
    markdown="span"
    type="text"
    class="title"
    ref="gameTitle"
    style="
      width: 99.5%;
      outline: none;
      border: 0;
      background-color: #4e2f00;
      text-align: center;
      font-size: calc(1.5vw + 1.5vh);
      font-family: JetbrainsMono;
    "
  />
</template>
<script>
export default {
  name: "GameTitle",
  methods: {
    updateTitle: function () {
      const Cookies = require("js-cookie");

      let value = this.$refs.gameTitle.value;
      if (value === "") {
        this.$refs.gameTitle.value = Cookies.get("gameTitle");
      } else {
        Cookies.set("gameTitle", value, { expires: 9999999 });
      }
    },
  },
  async mounted() {
    const Cookies = require("js-cookie");
    const titleJson = require("../data/TitleWordList");

    const gameTitle = await Cookies.get("gameTitle");

    if (typeof gameTitle == "undefined") {
      const noun =
        titleJson["nouns"][
          Math.floor(Math.random() * titleJson["nouns"].length)
        ];
      const adjective =
        titleJson["adjectives"][
          Math.floor(Math.random() * titleJson["adjectives"].length)
        ];

      const colonyName = `The ${adjective} ${noun} Colony`;
      this.$refs.gameTitle.value = colonyName;
      Cookies.set("gameTitle", colonyName, { expires: 9999999 });
    } else {
      this.$refs.gameTitle.value = gameTitle;
    }
  },
};
</script>
<style lang=""></style>
