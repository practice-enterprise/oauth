<template lang="pug">
  .wrapper
    .title
      h1 Thomas More: De Nayer
      navbar
    .flex.h.mt-2
      .flex.v
        .card.c200.flex.v.center
          span Authorize Discord then Canvas
          DiscordButton
          CanvasButton
        .card.c200.flex.v
          h3 What's this?
          p Connect your Discord and Canvas account to access
            |  Canvas features, reminders and more in your Discord server!
      .card.c500.flex.v
        h3 How do I sign in?
        p First you sign in with Discord, afterwards with Canvas.
        h4 Discord
        p Simply click authorize next to Discord and log in.
        h4 Canvas
        p You will first need to generate an access token,
          |  enter this and click authorize.
          |  Make sure you set it to not expire for your convenience
          |  (you can always revoke this later).
        <a href="https://community.canvaslms.com/t5/Admin-Guide/How-do-I-manage-API-access-tokens-as-an-admin/ta-p/8/">How to create an access token for Canvas</a>
</template>

<script lang="ts">
import Vue from 'vue';
import CanvasButton from '../components/CanvasButton.vue';
import DiscordButton from '../components/DiscordButton.vue';
import Navbar from '../components/Nav.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    CanvasButton,
    DiscordButton,
    Navbar,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card span {
  margin-bottom: 1rem;
}

</style>
