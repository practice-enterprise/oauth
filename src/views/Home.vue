<template lang="pug">
  .wrapper
    .title
      h1 Thomas More: De Nayer
      h5 requires authetication
    .buttons
      CanvasButton
      DiscordButton
</template>

<script lang="ts">
import Vue from 'vue';
import CanvasButton from '../components/CanvasButton.vue';
import DiscordButton from '../components/DiscordButton.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    CanvasButton,
    DiscordButton,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex: direction;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
</style>
