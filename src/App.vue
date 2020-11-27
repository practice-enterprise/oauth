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
</style>
