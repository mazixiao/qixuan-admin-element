<template>
  <div class="content">
    <commonHeader></commonHeader>
    <div class="contents">
      <el-card class="box-card" style="width: 100%">
        <div slot="header" class="clearfix">
          <h4>订单趋势分析</h4>
          <el-button style="float: right" size="small" type="primary">详情</el-button>
        </div>

        <div id="myChart1" class="myChart" :style="{width: '100%', height: '330px'}"></div>
      </el-card>

      <div class="two-chart clearfix">
        <el-card class="box-card fl" style="width:58.5%">
          <div slot="header" class="clearfix">
            <h4>订单数据分析</h4>
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

      <div class="two-chart clearfix">
        <el-card class="box-card fl" style="width:49.2%">
          <div slot="header" class="clearfix">
            <h4>订单种类分析</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart4" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>

        <el-card class="box-card fr" style="width:49.2%">
          <div slot="header" class="clearfix">
            <h4>订单完成率</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart5" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>
      </div>

      <div class="three-chart">
        <el-card class="box-card" style="width:32.5%">
          <div slot="header" class="clearfix">
            <h4>高库存物料预警</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart6" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>
        <el-card class="box-card" style="width:32.5%">
          <div slot="header" class="clearfix">
            <h4>高库存物料预警</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart7" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>
        <el-card class="box-card" style="width:32.5%">
          <div slot="header" class="clearfix">
            <h4>低库存物料预警</h4>
            <el-button style="float: right" size="small" type="primary">详情</el-button>
          </div>
          <div id="myChart8" class="myChart" :style="{width: '100%', height: '330px'}"></div>
        </el-card>
      </div>
    </div>
  </div>
</template>
  <!-- https://gallery.echartsjs.com/editor.html?c=x7UGQ1zx5p -->

<script>
import commonHeader from "../../components/header";
// 引入中国的信息
import "echarts/map/js/china.js";
export default {
  name: "overviewOrderForm",
  components: {
    commonHeader
  },
  data() {
    return {};
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
      let myChart7 = this.$echarts.init(document.getElementById("myChart7"));
      let myChart8 = this.$echarts.init(document.getElementById("myChart8"));
      // 绘制图表
      myChart1.setOption({
        title: {
          text: "最近六个月",
          subtext: ""
        },

        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["总金额", "订单数"]
        },
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
            type: "value",
            axisLabel: {
              formatter: "{value}%"
            }
          }
        ],
        series: [
          {
            name: "总金额",
            type: "line",
            itemStyle: {
              normal: {
                color: "green",
                areaStyle: {
                  type: "default"
                }
              }
            },
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值"
                },
                {
                  type: "min",
                  name: "最小值"
                }
              ]
            },
            data: [11, 11, 15, 13, 12, 13, 10, 13, 12, 13, 10, 11]
          },
          {
            name: "订单数",
            type: "line",
            itemStyle: {
              normal: {
                color: "red",
                areaStyle: {
                  type: "default"
                }
              }
            },
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            data: [8, 8, 12, 10, 9, 10, 7, 10, 9, 10, 7, 8]
          }
        ]
      });
      myChart2.setOption({
        title: {
          subtext: "本周"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["比昨日", "上周周期", "上月周期"]
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}%"
            }
          }
        ],
        series: [
          {
            name: "比昨日",
            type: "bar",
            data: [10, 20, 30, 40, 50, 60, 70],
            itemStyle: {
              normal: {
                color: "#3181e1",
                label: {
                  // show: true, //开启显示
                  textStyle: {
                    //数值样式
                    color: "#02b2b5",
                    fontSize: 14
                  }
                }
              }
            },
            barWidth: 15 //柱图宽度
          },
          {
            name: "上周周期",
            type: "bar",
            data: [10, 20, 30, 40, 50, 60, 70],
            itemStyle: {
              normal: {
                color: "#fd835a",
                label: {
                  textStyle: {
                    //数值样式
                    color: "#02b2b5",
                    fontSize: 14
                  }
                }
              }
            },
            barWidth: 15 //柱图宽度
          },
          {
            name: "上月周期",
            type: "bar",
            data: [10, 20, 30, 40, 50, 60, 70],
            itemStyle: {
              normal: {
                color: "#31acac",
                label: {
                  textStyle: {
                    //数值样式
                    color: "#02b2b5",
                    fontSize: 14
                  }
                }
              }
            },
            barWidth: 15 //柱图宽度
          }
        ]
      });

      myChart3.setOption({
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

      myChart4.setOption({
        title: {
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        calculable: true,
        color: ["#3399ff", "#66cc66", "#ff6633", "#6666cc"],
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [70, 110],
            center: ["50%", "50%"],
            roseType: "area",
            data: [
              { value: 10, name: "手机数码" },
              { value: 5, name: "户外运动" },
              { value: 15, name: "家具百货" },
              { value: 25, name: "家用电器" }
            ]
          }
        ]
      }),
      myChart5.setOption({
        backgroundColor: "#03141c",
        title: {
          text: "84%",
          subtext: "完成部门占比",
          x: "center",
          y: "center",
          textStyle: {
            color: "#fff",
            fontSize: 30,
            fontWeight: "normal"
          },
          subtextStyle: {
            color: "rgba(255,255,255,.45)",
            fontSize: 14,
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: ["rose3", "rose5", "rose6", "rose7", "rose8"]
        },
        calculable: true,
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [100, 130],
            center: ["50%", "50%"],
            data: [
              {
                value: 34,
                name: "吴际帅\n牛亚莉",
                itemStyle: {},
                label: {
                  color: "rgba(255,255,255,.45)",
                  fontSize: 14,
                  formatter: "完成梳理部门\n{a|34}个",
                  rich: {
                    a: {
                      color: "#fff",
                      fontSize: 20,
                      lineHeight: 30
                    }
                  }
                }
              },
              {
                value: 52,
                name: "rose2",
                itemStyle: {
                  color: "transparent"
                }
              }
            ]
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [110, 120],
            center: ["50%", "50%"],
            data: [
              {
                value: 34,
                name: "吴际帅\n牛亚莉",
                itemStyle: {
                  color: "transparent"
                }
              },
              {
                value: 52,
                name: "rose2",
                itemStyle: {},
                label: {
                  color: "rgba(255,255,255,.45)",
                  fontSize: 14,
                  formatter: "部门总量\n{a|52}个",
                  rich: {
                    a: {
                      color: "#fff",
                      fontSize: 20,
                      lineHeight: 30
                    }
                  }
                }
              }
            ]
          }
        ]
      });

      myChart6.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#0066cc", "#9ab75c", "#856ba4", "#ff784b"],
        legend: {
          orient: "vertical",
          x: "left",
          data: ["超期30天以上", "超期11-30天", "超期2-10天", "超期1天"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["25%", "40%"],
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
              { value: 7, name: "超期30天以上" },
              { value: 4, name: "超期11-30天" },
              { value: 5, name: "超期2-10天" },
              { value: 14, name: "超期1天" }
            ]
          }
        ]
      });
      myChart7.setOption(
      {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color:['#3399ff','#9ab75c','#ff784b'],
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['黄色预警客户','蓝色预警客户','红色预警客户']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['25%', '40%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:30, name:'黄色预警客户'},
                {value:8, name:'蓝色预警客户'},
                {value:20, name:'红色预警客户'}
            ]
        }
    ]
      });
      myChart8.setOption(
      {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color:['#3399ff','#66cc66','#ff6633', '#6666cc'],
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['手机数码','户外运动','家具百货', '家用电器']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['25%', '40%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:7, name:'手机数码'},
                {value:3, name:'户外运动'},
                {value:6, name:'家具百货'},
                {value:20, name:'家用电器'},
            ]
        }
    ]
      }
      );



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






