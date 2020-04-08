<template>
  <div class="login">
    <el-container class="container">
      <el-header class="header">
        <div class="login">
          <el-button @click="getLogin()" type="primary" icon="el-icon-edit" circle></el-button>
        </div>
      </el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    methods:{
        getLogin(){
            console.log(1);
            this.$router.push('/home');
        }
    }
};
</script>

<style lang="">
.login {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
}
.login .container {
  position: relative;
  width: 100%;
  height: 100%;
}
.login .container .header {
  padding: 0;
}
.login .container .header .login {
  width: 60px;
  float: right;
  margin-top: 5px;
}
.login .container .main {
  padding: 0;
}
</style>