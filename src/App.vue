<template lang="pug">
  router-view
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Raleway:wght@400;500&family=Roboto:wght@400;500&display=swap');

body, html {
  margin: 0 4vw;
  padding: 0;
  height: 100%;

  background: #ECF0F3;
  font-family: 'Poppins', sans-serif;
}

h1 {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 48px;
  margin: 12px 0px;
  margin-top: 0;
}

h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
}

button {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;

  &.auth {
    margin-left: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 138px;
    height: 56px;
    border: none;
  }
}

.card {
  box-shadow: -18px -18px 30px 0px rgba(255, 255, 255, 1),
    18px 18px 30px 0px rgba(209, 217, 230, 1);

  padding: 22px;
  border-radius: 16px;
  margin: 16px;

  &.c200 {
    height: 200px;
    width: 460px;
  }

  &.c500 {
    height: 480px;
    width: 460px;
  }
}

.flex {
  display: flex;

  &.v {
    flex-direction: column;
  }

  &.h {
    flex-direction: row;
  }

  &.jcenter {
    justify-content: center;
  }

  &.icenter {
    align-items: center;
  }

  .center {
    align-items: center;
    justify-content: center;
  }
}

.mt-2 {
  margin-top: 2rem;
}
</style>
