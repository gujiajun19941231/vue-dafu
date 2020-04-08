<template>
  <div class="alarm">
    <div class="alarm-wrapper">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="当天告警" name="first">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="告警级别">
              <el-select v-model="formInline.level" placeholder="告警级别">
                <el-option label="严重" value="1"></el-option>
                <el-option label="普通" value="2"></el-option>
                <el-option label="警告" value="3"></el-option>
                <el-option label="通知" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>

          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="Name" label="告警对象名称"></el-table-column>
            <el-table-column prop="Level" label="告警级别"></el-table-column>
            <el-table-column prop="AlarmTime" label="告警时间"></el-table-column>
            <el-table-column prop="Advise" label="告警原因"></el-table-column>
            <el-table-column prop="Status" label="操作状态"></el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row,$event)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="历史告警" name="second">历史告警</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      formInline: {
        level: ""
      },
      tableData: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log(1);
    }
  },
  created() {
    fetch(
      "https://console.dafudata.com/api/v1.0/alarm?page=1&projectCode=huaxin"
    )
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result);
        if (result.status == 200) {
          this.tableData = result.data.data;
        }
      });
  }
};
</script>

<style lang="">
.alarm {
  position: absolute;
  width: 100%;
  height: 100%;
}
.alarm .alarm-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>