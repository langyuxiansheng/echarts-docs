<template>
    <div>
        <div class="title">
            <span class="tips">
                <font>{{ config.title }}</font>
                <el-tag effect="dark">Top10</el-tag>
            </span>
            <el-button icon="el-icon-refresh-right" class="refresh-btn" @click="handleRefresh()">
                刷新
            </el-button>
        </div>
        <div class="charts">
            <div id="charts-container" />
            <el-select v-model="time" class="charts-time-select" placeholder="请选择" @change="handleChange">
                <el-option v-for="item in list" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
    </div>
</template>
<script>
// 引入基本模板
// import echarts from "echarts/lib/echarts";

//引入环形图
// import "echarts/lib/chart/bar";
// // 引入提示框组件、标题组件、工具箱组件。
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/title";
// import "echarts/lib/component/legend";

// 引入基本模板
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { TitleComponent } from "echarts/components";
echarts.use([CanvasRenderer, TitleComponent]);
/**
 * 获取N天前的时间戳
 * @param day
 * @return {number}
 */
const getDaysAgoTime = (day) => {
    return new Date(new Date().setHours(0, 0, 0, 0)) / 1000 - 24 * 60 * 60 * (day || 1);
};
export default {
    name: "LineCharts",
    props: {
        options: {
            required: false,
            type: [Object],
            default: () => {},
        },
    },
    data() {
        return {
            config: {
                title: null,
                activeUserData: [],
                activeCountData: [],
                xAxis: [],
            },
            list: [
                {
                    label: "最近一周",
                    value: getDaysAgoTime(7),
                },
                {
                    label: "最近一月",
                    value: getDaysAgoTime(30),
                },
                {
                    label: "三月内",
                    value: getDaysAgoTime(90),
                },
                {
                    label: "六月内",
                    value: getDaysAgoTime(180),
                },
                {
                    label: "一年内",
                    value: getDaysAgoTime(365),
                },
            ],
            time: getDaysAgoTime(30),
        };
    },
    mounted() {
        // this.init();
    },
    methods: {
        /**
         * 初始化charts
         */
        init() {

             // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById(this.chartId));
            let hs = function() {
                let arr = [];
                for (let index = 0; index <= 24; index++) {
                    (index % 2 == 0) && arr.push(index);
                }
                return arr;
            };
            var option = {
                grid: {
                    bottom: 25,
                    top: 10
                },
                xAxis: {
                    type: 'category',
                    data: hs(),
                    axisTick: {
                        show: false
                    },
                    axisLabel: { //坐标文字
                        color: '#151515'
                    }
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 4,
                    axisLabel: { //坐标文字
                        color: '#151515',
                        formatter: function (value) {
                            return `${value} ℃`;
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#004C63',
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    data: [10, 20, 34, 21, 5, 14, 26],
                    type: 'line',
                    lineStyle: {
                        color: '#004C63'
                    }
                }]
            };

            myChart.setOption(option);
            // const { activeUserData, activeCountData, xAxis } = this.config;
            // // 基于准备好的dom，初始化echarts实例
            // let myChart = echarts.init(document.getElementById("charts-container"));
            // let legendData = ["访问用户", "访问次数"];
            // const data = [
            //     {
            //         name: legendData[0],
            //         data: activeUserData,
            //         type: "bar",
            //         barWidth: 10,
            //     },
            //     {
            //         name: legendData[1],
            //         data: activeCountData,
            //         type: "bar",
            //         barWidth: 10,
            //     },
            // ];

            // // 绘制图表
            // myChart.setOption({
            //     color: ["#FFEB7B", "#A3A8FF"],
            //     grid: {
            //         //绘制区域
            //         left: "3.2%",
            //         right: "0%",
            //         top: "18%",
            //         bottom: "5%",
            //     },
            //     tooltip: {
            //         //提示组件
            //         trigger: "item",
            //         axisPointer: {
            //             // 坐标轴指示器，坐标轴触发有效
            //             type: "line", // 默认为直线，可选为：'line' | 'shadow'
            //         },
            //         position: "top",
            //         formatter: `类目: {a}<br />{b}: {c}`,
            //     },

            //     legend: {
            //         //坐标系图例
            //         data: legendData,
            //         itemWidth: 26,
            //         itemHeight: 6,
            //         right: 0,
            //         textStyle: {
            //             color: "#797B86",
            //         },
            //     },

            //     xAxis: {
            //         type: "category",
            //         data: xAxis,
            //         axisLabel: {
            //             //坐标文字
            //             color: "#24253B",
            //             interval: 0,
            //         },
            //         axisLine: {
            //             lineStyle: {
            //                 //坐标轴颜色
            //                 color: "#C6C9FF",
            //             },
            //         },
            //         axisTick: {
            //             //坐标轴刻度
            //             inside: true, //朝内
            //             lineStyle: {
            //                 color: "#A3A8FF",
            //             },
            //         },
            //     },

            //     yAxis: {
            //         type: "value",
            //         axisLine: {
            //             show: false,
            //             lineStyle: {
            //                 //坐标轴颜色
            //                 color: "#E6EAF9",
            //             },
            //         },
            //         axisTick: {
            //             //坐标轴刻度
            //             inside: true, //朝内
            //             lineStyle: {
            //                 color: "#E6EAF9",
            //             },
            //         },
            //         axisLabel: {
            //             //坐标文字
            //             color: "#151515",
            //             formatter: function(value) {
            //                 if (value > 9999) {
            //                     return Number.parseInt(value / 10000) + "万";
            //                 }
            //                 return value.toFixed(0);
            //             },
            //         },
            //         splitLine: {
            //             //网格设置
            //             lineStyle: {
            //                 color: "#DADCFF",
            //                 type: "dashed",
            //             },
            //         },
            //     },

            //     series: data,
            // });

            // window.addEventListener("resize", function() {
            //     myChart.resize();
            // });
        },
    }
};
</script>

<style lang="scss" scoped>
.chart-warpper {
    margin-top: 16px;
    padding: 30px;
    min-height: 230px;
    box-shadow: 0px 0px 5px 0px rgba(211, 211, 211, 0.6);
    border-radius: 3px;
    .title {
        margin-bottom: 24px;
        font-weight: bold;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .tips {
            position: relative;
            display: inline-block;
            margin-left: 10px;
            display: flex;
            align-items: center;
            font {
                margin-right: 10px;
            }
            &::before {
                width: 4px;
                height: 18px;
                background: #5761ff;
                border-radius: 2px;
                display: block;
                content: " ";
                position: absolute;
                left: -10px;
                top: 2px;
            }
        }
        .refresh-btn {
            padding: 6px 8px;
            display: flex;
            align-items: center;
            /deep/ i {
                font-size: 16px;
            }
        }
    }
    .charts {
        position: relative;
        #charts-container {
            height: 410px;
        }
        .charts-time-select {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
}
</style>
