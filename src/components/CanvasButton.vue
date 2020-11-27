<template lang="pug">
  .canvas
    img(src="../assets/icons/canvas.svg")
    span Canvas
    button.auth Authorize
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CanvasButton',
});
</script>

<style lang="scss" scoped>
.canvas {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 310px;

  & > * {
    margin: 0px 8px;
  }

  span {
    color: #E63F30;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
  }

  button {
    color: white;
    background: #E63F30;
    border-radius: 0px 24px 0px 32px;
  }
}
</style>
