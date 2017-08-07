<template>
  <div id="app">
    <header-page></header-page>
    <content-page></content-page>
  </div>
</template>

<script>
import headerPage from '@/components/base/header';
import contentPage from '@/components/base/content';

export default {
  name: 'app',
  components: {
    headerPage, contentPage
  }
}

</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

body {
  margin: 0px;
}
</style>
