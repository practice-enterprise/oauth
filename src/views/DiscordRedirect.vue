<template lang="pug">
  div
    span(v-if="status == 'pending'") Just a second while we authenticate you
    span(v-else-if="status === 'success'") Success!
    span(v-else) Something went wrong
</template>

<script lang="ts">
import Vue from 'vue';
import Axios from 'axios';

export default Vue.extend({
  name: 'discord-redirect',
  data: () => ({
    status: 'pending' as 'pending' | 'success' | 'failed',
  }),
  mounted() {
    Axios.request({
      method: 'post',
      url: 'http://localhost:3000/oauth/callback/discord',
      params: {
        code: this.$route.query.code,
      },
    })
      .then((res) => {
        this.status = 'success';
        localStorage.setItem('jwt', res.data.jwt);
        this.$router.push('/');
      })
      .catch((err) => {
        console.error(err);
        this.status = 'failed';
      });
  },
});
</script>

<style lang="scss" scoped>

</style>
