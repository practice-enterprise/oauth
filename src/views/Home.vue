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
          h3 Available Servers
          p Currently none
      .card.c500.flex.v
        h3 About
        p Connect your Discord account with canvas and get reminders,
          |  announcements and more in your Discord server!
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
