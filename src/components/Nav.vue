<template lang="pug">
  .navbar
    .item
      IconifyIcon(:icon="icons.bookOpenOutline" :style="{fontSize: '24px', color: '#525252'}")
      span docs
    a.item(href="https://github.com/practice-enterprise" target="_blank")
      IconifyIcon(:icon="icons.githubIcon" :style="{fontSize: '24px', color: '#525252'}")
      span github
    .item
      IconifyIcon(:icon="icons.settingsIcon" :style="{fontSize: '24px', color: '#525252'}")
      span dashboard
</template>

<script lang="ts">
import Vue from 'vue';
import IconifyIcon from '@iconify/vue';
import bookOpenOutline from '@iconify/icons-mdi/book-open-outline';
import githubIcon from '@iconify/icons-feather/github';
import settingsIcon from '@iconify/icons-carbon/settings';

export default Vue.extend({
  name: 'navbar',
  components: {
    IconifyIcon,
  },
  data: () => ({
    icons: {
      bookOpenOutline,
      githubIcon,
      settingsIcon,
    },
  }),
});
</script>

<style scoped lang="scss">
.navbar {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: row;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 42px;

  span {
    margin-left: 8px;
  }

  color: black;
  text-decoration: none;
}
</style>
