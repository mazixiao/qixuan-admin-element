<template>
  <div :class="['content', {'active': isCollapse}]">
    <commonHeader></commonHeader>
    <div class="contents">
      <el-card class="box-card" style="width: 100%">
        <div slot="header" class="clearfix">
          <h4>用户分析</h4>
          <el-button style="float: right" size="small" type="primary">详情</el-button>
        </div>

        <table>
          <tr>
            <th></th>
            <th width="16%">启动用户数</th>
            <th width="16%">启动次数</th>
            <th width="16%">新用户数</th>
            <th width="16%">次均使用时长</th>
            <th width="16%">人均使用时长</th>
            <th width="16%">人均日启动次数</th>
          </tr>
          <tr>
            <td>今日</td>
            <td>1,122</td>
            <td>5,568</td>
            <td>355</td>
            <td>00:05:15</td>
            <td>00:11:50</td>
            <td>5.24</td>
          </tr>
          <tr>
            <td>昨日</td>
            <td>1,519</td>
            <td>2,546</td>
            <td>256</td>
            <td>00:06:26</td>
            <td>00:12:36</td>
            <td>6.21</td>
          </tr>
        </table>
        <div id="myChart1" class="myChart" :style="{width: '100%', height: '330px'}"></div>
      </el-card>

      <div class="two-chart clearfix">
        <el-card class="box-card fl" style="width:58.5%">
          <div slot="header" class="clearfix">
            <h4>用户分析</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart2" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>

        <el-card class="box-card fr" style="width:40%">
          <div slot="header" class="clearfix">
            <h4>汇总防伪查询结果</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart3" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>
      </div>

      <div class="three-chart">
        <el-card class="box-card" style="width:32.5%">
          <div slot="header" class="clearfix">
            <h4>查询热度排行</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart4" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>
        <el-card class="box-card" style="width:32.5%">
          <div slot="header" class="clearfix">
            <h4>查询城市热度排行</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart5" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>
        <el-card class="box-card" style="width:32.5%">
          <div slot="header" class="clearfix">
            <h4>查询区域分析</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart6" class="myChart" :style="{width: '100%', height: '330px'}"></div>
          <!-- https://gallery.echartsjs.com/editor.html?c=x7UGQ1zx5p -->
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from "../../components/header";
// 引入中国的信息
import "echarts/map/js/china.js";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "overviewUser",
  components: {
    commonHeader
  },
  data() {
    return {};
  },
  computed: {
      isCollapse() {
          return this.$store.state.isCollapse
      },
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    randomData() {
      return Math.round(Math.random() * 1000);
    },

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      let myChart4 = this.$echarts.init(document.getElementById("myChart4"));
      let myChart5 = this.$echarts.init(document.getElementById("myChart5"));
      let myChart6 = this.$echarts.init(document.getElementById("myChart6"));
      // 绘制图表
      myChart1.setOption({
        title: {
          text: "今天对比昨天",
          subtext: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["昨日分时用户", "今日分时用户"]
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "00:00-00:59",
              "02:00-02:59",
              "03:00-03:59",
              "04:00-04:59",
              "05:00-05:59",
              "06:00-06:59",
              "07:00-07:59",
              "08:00-08:59",
              "09:00-09:59",
              "10:00-10:59",
              "11:00-11:59",
              "12:00-12:59"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "昨日分时用户",
            type: "line",
            itemStyle: {
              normal: {
                //改变区域颜色
                color: "red",
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [11, 11, 15, 13, 12, 13, 10, 13, 12, 13, 10, 11]
          },
          {
            name: "今日分时用户",
            type: "line",
            itemStyle: {
              normal: {
                //改变区域颜色
                color: "green",
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [8, 8, 12, 10, 9, 10, 7, 10, 9, 10, 7, 8]
          }
        ]
      });
      myChart2.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: { data: ["访客"] },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十二月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "访客",
            type: "line",
            stack: "总量",
            data: [50, 48, 40, 53, 56, 50, 50, 48, 40, 53, 56, 50],

            itemStyle: {
              normal: {
                //改变区域颜色
                // color: "green",
                // areaStyle: {
                //   // type: "default"
                // },

                lineStyle: {
                  color: "red" //改变折线颜色
                }
              }
            }
          }
        ]
      });

      myChart3.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: [
            "有效码-图片和暗码真",
            "无效码",
            "有效码-图片和暗码假",
            "有效码-图片假",
            "有效码-图片和暗码真"
          ]
        },

        color: ["#f4a55e", "#4faac2", "#856ba4", "#9ab75c", "#0066cc"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 5400, name: "有效码-图片和暗码真" },
              { value: 250, name: "无效码" },
              { value: 150, name: "有效码-图片和暗码假" },
              { value: 5400, name: "有效码-图片假" },
              { value: 5400, name: "有效码-图片和暗码真" }
            ]
          }
        ]
      });

      myChart4.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: [
            "CF-8095",
            "CF-6077",
            "CF-2045",
            "CF-2069",
            "CF-8091",
            "CF-6067",
            "CF-2044",
            "CF-2068"
          ]
        },
        series: [
          {
            type: "bar",
            data: [1510, 1678, 1876, 1920, 1977, 1950, 2400, 2680],
            itemStyle: {
              normal: {
                color: "#3282e2",
                label: {
                  show: true, //开启显示
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#333",
                    fontSize: 12
                  },
                  formatter: function(obj) {
                    return obj.data;
                  }
                }
              }
            }
          }
        ]
      }),
        myChart5.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "value",
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: "category",
            data: [
              "武汉",
              "苏州",
              "杭州",
              "江阴",
              "广州",
              "惠州",
              "深圳",
              "北京",
              "成都",
              "上海"
            ]
          },
          series: [
            {
              type: "bar",
              data: [
                1510,
                1520,
                1530,
                1540,
                1550,
                1560,
                1570,
                1580,
                1590,
                1600
              ],
              itemStyle: {
                normal: {
                  color: "#fe926e",
                  label: {
                    show: true, //开启显示
                    position: "right", //在上方显示
                    textStyle: {
                      //数值样式
                      color: "#333",
                      fontSize: 12
                    },
                    formatter: function(obj) {
                      return obj.data;
                    }
                  }
                }
              }
            }
          ]
        });
      myChart6.setOption({
        title: {
          subtext: "查询次数"
        },
        tooltip: {
          trigger: "item"
        },
        dataRange: {
          orient: "horizontal",
          min: 0,
          max: 55000,
          // 文本，默认为数值文本
          text: ["高", "低"],
          splitNumber: 0
        },
        series: [
          {
            name: "2011全国GDP分布",
            type: "map",
            mapType: "china",
            mapLocation: {
              x: "center"
            },
            selectedMode: "multiple",
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: [
              { name: "西藏", value: 605.83 },
              { name: "青海", value: 1670.44 },
              { name: "宁夏", value: 2102.21 },
              { name: "海南", value: 2522.66 },
              { name: "甘肃", value: 5020.37 },
              { name: "贵州", value: 5701.84 },
              { name: "新疆", value: 6610.05 },
              { name: "云南", value: 8893.12 },
              { name: "重庆", value: 10011.37 },
              { name: "吉林", value: 10568.83 },
              { name: "山西", value: 11237.55 },
              { name: "天津", value: 11307.28 },
              { name: "江西", value: 11702.82 },
              { name: "广西", value: 11720.87 },
              { name: "陕西", value: 12512.3 },
              { name: "黑龙江", value: 12582 },
              { name: "内蒙古", value: 14359.88 },
              { name: "安徽", value: 15300.65 },
              { name: "北京", value: 16251.93, selected: true },
              { name: "福建", value: 17560.18 },
              { name: "上海", value: 19195.69, selected: true },
              { name: "湖北", value: 19632.26 },
              { name: "湖南", value: 19669.56 },
              { name: "四川", value: 21026.68 },
              { name: "辽宁", value: 22226.7 },
              { name: "河北", value: 24515.76 },
              { name: "河南", value: 26931.03 },
              { name: "浙江", value: 32318.85 },
              { name: "山东", value: 45361.85 },
              { name: "江苏", value: 49110.27 },
              { name: "广东", value: 53210.28, selected: true }
            ]
          }
        ]
      });
    }
  },

  created() {
    console.log(this.$store.state, "this.$store.state.");
  }
};
</script>

<style lang="scss" scoped>
.content {
  background-color: #334b85;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 0px;
  padding-bottom: 0px;
  .contents {
    padding: 15px;

    .box-card {
      margin-bottom: 15px;
      // width: 480px;
    }
    h4 {
      display: inline-block;
    }

    table {
      width: 100%;
      text-align: center;
      tr {
        padding: 10px;
        &:nth-child(2) {
          td {
            font-size: 30px;
            &:nth-child(1) {
              font-size: 14px;
            }
          }
        }
        th {
          font-size: 14px;
          line-height: 40px;
          font-weight: normal;
        }
        td {
          line-height: 40px;
        }
      }
    }

    .myChart {
      margin-top: 20px;
    }
    .two-chart {
      width: 100%;
    }
    .three-chart {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>














