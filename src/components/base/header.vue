<template>
  <header class="header">
    <div class="logo">
      智慧食安云平台
    </div>
    <div>
      <el-menu mode="horizontal" class="nav">
        <el-menu-item index="1">支撑系统</el-menu-item>
        <el-menu-item index="2">业务系统</el-menu-item>
        <el-menu-item index="3">后台管理</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
  }
}
</script>


<style scoped>
.header {
  background-color: #1D8CE0;
  height: 60px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 20px;
  z-index: 999;
  box-sizing: border-box;
  position: fixed;
}

.header .logo {
  font-size: 20px;
  position: absolute;
  width: 200px;
  vertical-align: middle;
  text-align: center;
  line-height: 60px;
  height: 60px;
}

.header .nav {
  background-color: #1D8CE0;
  left: 220px;
  position: absolute;
}

.header .nav li {
  color: #13CE66;
}

.header .nav li:hover {

  background-color: #1D8CE0;
  border-bottom: 5px solid #13CE66;
}
</style>

