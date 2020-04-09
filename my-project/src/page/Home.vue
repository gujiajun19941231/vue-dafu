<template>
  <div class="home">
    <el-container class="container">
      <el-aside class="aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :default-active="defaultActive"
          router
        >
          <el-menu-item index="/map">
            <i class="el-icon-menu"></i>
            <span slot="title">项目地图</span>
          </el-menu-item>
          <el-menu-item index="/monitor">
            <i class="el-icon-menu"></i>
            <span slot="title">实时工况</span>
          </el-menu-item>
          <el-menu-item index="/alarm">
            <i class="el-icon-setting"></i>
            <span slot="title">设备告警</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/timeShare">能耗汇总</el-menu-item>
              <el-menu-item index="1-2">同比环比</el-menu-item>
              <el-menu-item index="1-1">评估曲线</el-menu-item>
              <el-menu-item index="1-2">趋势曲线</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container class="contain">
        <el-header class="header">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="loginOut()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>gu</span>
        </el-header>

        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>-->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  methods: {
    //   退出返回登录页
    loginOut() {
      console.log(1);
      this.$router.push("/");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
}
.home .container {
  width: 100%;
  height: 100%;
}

.home .container .aside {
  width: 200px !important;
}
.home .container .contain {
  position: relative;
}
.home .container .contain .header {
  position: relative;
  background-color: #4576a0;
  text-align: right;
  line-height: 60px;
  color: white;
}
</style>
