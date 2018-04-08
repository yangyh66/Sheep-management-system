<template>
  <div class="contain">
    <div class="header">
      <div class="imgBox">
        <img src="../assets/log.png" alt="LOGO">
      </div>
      <h2>小绵羊增值服务后台</h2>
    </div>
      <myMenu></myMenu>
      <myFilter></myFilter>
    <router-view></router-view>
  </div>
</template>

<script>
  import myFilter from '../components/myFilter.vue'
  import myMenu from '../components/myMenu.vue'
  export default {
    name: "index",
    components:{myFilter,myMenu},
    created(){
    }
  }

</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    min-height: 10%;
    background: #2c99eb;
    h2 {
      display: inline-block;
      position: relative;
      left: 60px;
      font-weight: 100;
      color: white;
      font-family: "微软雅黑";
      font-size: 18px;
    }
    .imgBox {
      width: 60px;
      height: 60px;
      background: #125A93;
      border-radius: 60px;
      position: relative;
      top: 20px;
      left: 50px;
      display: inline-block;
      img {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 10px;
        top: 10px;
      }
    }
  }
  .contain {
    height: 100%;
    width: 100%;
    background: #eaeaea;
  }
</style>
