<template>
<div class="nav-menu">
  <el-row class="tac">
    <el-col>
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#125A93"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <span>民生信用卡</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" route="msBankUserInfo">用户数据</el-menu-item>
            <el-menu-item index="1-2" route="msBankDetails">详情</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>中信信用卡</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">用户数据</el-menu-item>
            <el-menu-item index="2-2">详情</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</div>
</template>

<script>
  import { mapState,mapMutations } from 'vuex'

    export default{
        name:"mymenu",
        data() {
            return {
            }
        },
    }
</script>

<style scoped lang="scss">
  .nav-menu{
    height: 90%;
    float: left;
    width: 10%;
  }
  .tac {
    width: 100%;
    height: 100%;
  }
  .el-col-24{
    height: 100%;
  }
  .el-menu{
    min-height: 100%;
  }
  .el-submenu .el-menu-item{
    min-width: 100%;
  }
</style>
