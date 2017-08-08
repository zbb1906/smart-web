<template>
  <div class="app-main">
    <side-bar></side-bar>
    <section class="app-container">
      <transition name="fade" mode="out-in">
        <router-view :key="key"></router-view>
      </transition>
    </section>
  </div>
</template>

<script>

import SideBar from './SideBar';
export default {
  name: 'Main',
  components: { SideBar },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>
<style scoped>
.app-main {
  position: fixed;
  top: 60px;
  width: 100%;
  height: calc(100% - 90px);
  padding: 0 10px;
}

.app-main .app-sidebar {
  position: fixed;
  width: 260px;
  top: 60px;
  bottom: 30px;
  overflow-y: auto;
}

.app-main .app-container {
  position: fixed;
  overflow: auto;
  top: 60px;
  bottom: 30px;
  left: 270px;
  width: calc(100% - 280px);
}
</style>

