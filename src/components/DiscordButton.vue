<template lang="pug">
  .discord(@click="redirect()")
    IconifyIcon(:icon="icons.discordIcon" :style="{color: '#7289da', fontSize: '32px'}")
    span Discord
    button.auth
      span.name(v-if="authorized") {{ username }}
      span(v-else) Authorize
</template>

<script lang="ts">
import Vue from 'vue';
import IconifyIcon from '@iconify/vue';
import discordIcon from '@iconify/icons-simple-icons/discord';
import jwt from 'jsonwebtoken';

export default Vue.extend({
  name: 'DiscordButton',
  components: {
    IconifyIcon,
  },
  data: () => ({
    icons: {
      discordIcon,
    },
    authorized: false,
    tokenData: {} as any,
  }),
  methods: {
    redirect() {
      window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=781214746891780137&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Foauth2%2Fdiscord&response_type=code&scope=identify%20guilds';
    },
  },
  computed: {
    username() {
      return `${this.tokenData.discord.username}#${this.tokenData.discord.discriminator}`;
    },
  },
  mounted() {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.tokenData = jwt.decode(token);
      console.log(this.tokenData);
      this.authorized = true;
    }
  },
});
</script>

<style lang="scss" scoped>
.discord {
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
    color: #7289DA;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
  }

  button {
    text-overflow: ellipsis;
    span {
      color: white;

      &.name {
        font-size: 14px;
        font-weight: 400;
      }
    }
    border-radius: 0px 24px 0px 32px;
    background: #7289DA;
    cursor: pointer
  }
}
</style>
