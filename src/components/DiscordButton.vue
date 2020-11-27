<template lang="pug">
  .discord
    IconifyIcon(:icon="icons.discordIcon" :style="{color: '#7289da', fontSize: '32px'}")
    span Discord
    button.auth Authorize
</template>

<script lang="ts">
import Vue from 'vue';
import IconifyIcon from '@iconify/vue';
import discordIcon from '@iconify/icons-simple-icons/discord';

export default Vue.extend({
  name: 'DiscordButton',
  components: {
    IconifyIcon,
  },
  data: () => ({
    icons: {
      discordIcon,
    },
  }),
});
</script>

<style lang="scss" scoped>
.discord {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 310px;

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
    color: white;
    background: #7289DA;
    border-radius: 32px 0px 24px;
  }
}
</style>
