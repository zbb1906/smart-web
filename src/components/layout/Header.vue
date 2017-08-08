<template>
  <header class="app-header">
    <div class="app-logo">
      智慧食安云平台
    </div>
    <el-menu mode="horizontal" class="app-nav">
      <el-menu-item index="1">支撑系统</el-menu-item>
      <el-menu-item index="2">业务系统</el-menu-item>
      <el-menu-item index="3">后台管理</el-menu-item>
    </el-menu>
  </header>
</template>
<script>
export default {

}
</script>

<style scoped>
.app-header {
  background-color: #1D8CE0;
  height: 60px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 20px;
}

.app-header .app-logo {
  font-size: 20px;
  width: 200px;
  position: fixed;
  vertical-align: middle;
  text-align: center;
  line-height: 60px;
}

.app-header .app-nav {
  background-color: #1D8CE0;
  left: 220px;
  position: fixed;
}

.app-header .app-nav li {
  color: #13CE66;
}

.app-header .app-nav li:hover {
  background-color: #1D8CE0;
  border-bottom: 5px solid #13CE66
}
</style>




