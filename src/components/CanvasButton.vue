<template lang="pug">
  .canvas(@click="redirect()")
    img(src="../assets/icons/canvas.svg")
    span Canvas
    button.auth Authorize
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CanvasButton',
  data: () => ({
    authorized: false,
    tokenData: {} as any,
  }),
  methods: {
    redirect() {
      window.location.href = 'https://canvas.toasthub.xyz/login/oauth2/auth?client_id=10000000000002&response_type=code&redirect_uri=http://localhost:8080/oauth2/canvas';
    },
  },
  computed: {
    username() {
      return 'this.tokenData';
    },
  },
});
</script>

<style lang="scss" scoped>
.canvas {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 310px;
  cursor: pointer;

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
    border-radius: 32px 0px 24px;
    background: #E63F30;
    cursor: pointer;
  }
}
</style>
