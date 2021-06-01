<template>
    <div :id="chartId" class="charts-container" />
</template>
<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入折线图图表，图表后缀都为 Chart
import { LineChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { TitleComponent, GridComponent } from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([CanvasRenderer, LineChart, TitleComponent, GridComponent]);
export default {
    name: "LineCharts",
    data() {
        return {
            chartId: `chartId-${Math.random().toString(36).substr(2).toLocaleUpperCase()}`
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        /**
         * 初始化charts
         */
        init() {

            let hs = function() {
                let arr = [];
                for (let index = 0; index <= 24; index++) {
                    (index % 2 == 0) && arr.push(index);
                }
                return arr;
            };

            // 基于准  备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById(this.chartId));
            var option = {
                grid: {
                    show: true,
                    bottom: 20,
                    top: 20,
                    left: 40,
                    right: 20
                },
                xAxis: {
                    type: 'category',
                    axisTick: { //刻度设置
                        show: false
                    },
                    axisLabel: { //坐标文字
                        color: '#151515'
                    },
                    axisLine:{
                        lineStyle:{//轴线的样色
                            color: '#E8EFF1'
                        }
                    },
                    data: hs()
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
                        lineStyle: {  //y轴分隔线样式设置
                            color: '#004C63',   //颜色
                            type: 'dashed', //虚线
                        }
                    }
                },
                series: [{
                    data: [50, 23, 24, 18, 35, 14, 26],
                    type: 'line',
                    lineStyle: {    //折线样式
                        color: '#004C63'
                    },
                    itemStyle:{ //这里设置的拐点颜色
                        color: '#004C63'
                    },
                    symbol: "circle",  //标记的图形（拐点）
                    symbolSize: 6,  //大小
                }]
            };
            myChart.setOption(option);
        }
    }
};
</script>

<style lang="scss" scoped>
.charts-container {
    width: 80%;
    margin: 100px auto;
    height: 410px;
    // border: 1px solid #f00;
}
</style>
