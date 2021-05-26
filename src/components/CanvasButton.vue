<template lang="pug">
  .canvasbutton
    .canvas(@click="redirect()")
      img(src="../assets/icons/canvas.svg")
      span Canvas
      button.auth
        span.name(v-if="authorized") {{ username }}
        span(v-else) Authorize
    input(
      v-if="manual && !authorized"
      type="text"
      placeholder="Canvas Access Token"
      required
      v-model="token"
    )
</template>

<script lang="ts">
/* eslint-disable no-alert */
import Vue from 'vue';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default Vue.extend({
  name: 'CanvasButton',
  data: () => ({
    authorized: false,
    instance: undefined as any,
    tokenData: {} as any,
    token: '',
  }),
  methods: {
    redirect() {
      if (this.instance) {
        if (!this.instance.manual) {
          window.location.href = `${this.instance.endpoint}/login/oauth2/auth?${this.instance.clientId}$response_type=code&redirect_uri=${this.instance.redirectUri}`;
        } else {
          if (!this.token) {
            alert('fill in the token field');
            return;
          }
          axios.request({
            url: 'http://localhost:3000/oauth/callback/canvas/manual',
            method: 'POST',
            data: {
              token: this.token,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
          }).then((res) => {
            localStorage.setItem('jwt', res.data.jwt);
            this.authorized = false;

            this.$router.go(0);
          }).catch((err) => {
            console.error(err);
            alert('invalid token');
          });
        }
      } else {
        alert('invalid canvas instance');
      }
    },
  },
  computed: {
    username() {
      return `${this.tokenData.canvas.username}`;
    },
    manual() {
      return this.instance?.manual || true;
    },
  },
  async mounted() {
    const instanceId = this.$route.query.instanceId || 'DLV3kVezrRO88588uA9H';
    localStorage.setItem('instanceId', instanceId as string);
    const res = await axios.request({
      url: `http://localhost:3000/oauth/instances/${instanceId}`,
      method: 'get',
    });
    this.instance = res.data;
    const token = localStorage.getItem('jwt');
    if (token) {
      this.tokenData = jwt.decode(token);
      if (this.tokenData.canvas) {
        this.authorized = true;
      }
    }
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
    span {
      color: white;
      font-size: 18px;

      &.name {
        font-size: 14px;
        font-weight: 400;
      }
    }

    border-radius: 32px 0px 24px;
    background: #E63F30;
    cursor: pointer;
  }
}

input {
  width: 95%;
  border: none;
  border-bottom: #E63F30 2px solid;
  border-radius: 6px 6px 0px 0px;
  padding: 8px 8px;
  margin-top: 1.25rem;
}
</style>
