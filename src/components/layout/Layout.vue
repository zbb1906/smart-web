<template>
  <div class="app-wrapper">
    <header-page></header-page>
    <main-page></main-page>
    <footer-page></footer-page>
  </div>
</template>

<script>

import HeaderPage from './Header';
import MainPage from './Main';
import FooterPage from './Footer';

export default {
  components: {
    HeaderPage, MainPage, FooterPage
  }
}
</script>

<style scoped>
.app-wrapper {
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>

