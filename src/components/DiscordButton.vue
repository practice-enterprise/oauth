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

if (process.env.VUE_APP_DREDIRECTURI == null) {
  throw Error('redirect uri not set');
}

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
      if (process.env.VUE_APP_DREDIRECTURI) {
        window.location.href = `https://discord.com/api/oauth2/authorize?client_id=781214746891780137&redirect_uri=${String(encodeURIComponent(process.env.VUE_APP_DREDIRECTURI))}&response_type=code&scope=identify%20guilds`;
      } else {
        throw new Error('VUE_APP_DREDIRECTURI undefined (env file)');
      }
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
      font-size: 18px;

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
