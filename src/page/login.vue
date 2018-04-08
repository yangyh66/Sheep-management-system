<template>
  <div class="backImage">
    <div class="loginBox">
      <div class="logo">
        <img src="../assets/log.png" alt="LOGO">
        <p>小绵羊增值服务后台</p>
      </div>
      <div class="inputBox">
        <div class='loginInput'>
          <i class='login-icon login-username'></i>
          <input type="text" placeholder='用户名' v-model="username">
        </div>
        <div class='loginInput'>
          <i class='login-icon login-password'></i>
          <input type="text" placeholder='密码' v-model="password">
        </div>
        <button class="login-button" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';

  export default {
    name: "login",
    data() {
      return {
        username: "",
        password: ""
      }
    },
    computed: {
      ...mapState({
        lastRoute: (state) => state.lastRoute
      })
    },
    methods: {
      ...mapMutations({
        change: 'changeLoginStatus',
      }),
      login(){
        console.log(this.username,this.password)
        this.$router.push("/index")
      }
    }
  }
</script>

<style lang="scss">

  .backImage {
    width: 100%;
    background: url("../assets/bg.jpg") no-repeat;
    position: relative;
    height: 100%;
    font-family: "微软雅黑";
    .loginBox {
      width: 576px;
      height: 495px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background: url("../assets/bg2.png") no-repeat;
      background-size: contain;
      .loginInput{
        overflow: hidden;
      }
      .logo {
        width: 30%;
        text-align: center;
        color: #fff;
        position: absolute;
        top: -100px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        img {
          width: 100%;
        }
      }
      .inputBox {
        width: 70%;
        position: absolute;
        top: 30%;
        left: 49%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        input{
          width: 340px;
          margin-top: 20px;
          height: 48px;
          line-height: 46px;
          font-size: 16px;
          background: url("../assets/iput_box.png")no-repeat;
          background-size: contain;
          border: none;
          outline: none;
          float: right;
          box-sizing: border-box;
          color: white;
          padding: 0 18px;
          &::-webkit-input-placeholder { /* WebKit browsers */
            color: #333;
          }
          &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #333;
          }
          &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #333;
          }
          &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #333;
          }
          &:focus{
            background: url("../assets/iput_box_click.png")no-repeat;
            background-size: contain;
          }
        }
        input:active{
          border: none;
          outline: none;
        }
      }
    }
  }

  .login-icon{
    display: inline-block;
    width: 32px;
    height: 37px;
    background-size: 90%;
    float: left;
    margin-left: 15px;
    margin-top: 26px;
  }
  .login-username{
    background: url("../assets/user_icon.png");
  }
  .login-password{
    background: url("../assets/password_icon.png");
  }
  .login-button{
    width: 40%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #c35733;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    position: absolute;
    bottom: -80px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    cursor: pointer;
  }
</style>
