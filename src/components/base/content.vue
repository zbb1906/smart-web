<template>
  <div class="container">
    <div class="left">
      <el-menu default-active="2">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>导航二</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三</el-menu-item>
      </el-menu>

    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  padding: 0 20px;
  top: 60px;
  bottom: 0px;
  position: absolute;
  height: calc(100% - 60px);
  width: calc(100% - 40px);
}

.container .left {
  width: 220px;
  position: absolute;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.container .left ul {
  height: 100%;
}

.container .right {
  left: 240px;
  right: 20px;
  position: absolute;
  height: 100%;
  width: calc(100% - 260px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>


