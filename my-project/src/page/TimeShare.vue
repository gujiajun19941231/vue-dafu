<template>
  <div class="timeShare">
    <div class="timeShare-wrapper">
      <el-tabs v-model="activeName">
        <el-tab-pane label="历史能耗统计" name="first">
          <el-tabs v-model="active">
            <el-tab-pane label="日统计" name="day">
              <div class="first-wrapper" id="main"></div>
            </el-tab-pane>
            <el-tab-pane label="月统计" name="month">月统计</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="能耗环比" name="second">能耗环比</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      active:"day"
    };
  },
  methods: {
    myEcharts() {
      console.log(this.getDate());
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // 获得时间方法
    getDate() {
      var myDate = new Date();

      var month = myDate.getMonth() + 1;
      var strDate = myDate.getDate();

      if (month > 0 && month <= 9) {
        month = "0" + month;
      }

      if (strDate > 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }

      //当天日期
      var todayDate = myDate.getFullYear() + "-" + month + "-" + strDate;

      return todayDate;
    }
  },
  mounted() {
    this.myEcharts();
  }
};
</script>

<style lang="">
.timeShare {
  position: absolute;
  width: 100%;
  height: 100%;
}

.timeShare .timeShare-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.timeShare .timeShare-wrapper .first-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
}
</style>