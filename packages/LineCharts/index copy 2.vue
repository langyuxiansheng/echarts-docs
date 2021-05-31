<template>
    <div id="charts-container" class="charts-container" />
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

             // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('charts-container'));
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
                    // splitNumber: 4,
                    // axisLabel: { //坐标文字
                    //     color: '#151515',
                    //     formatter: function (value) {
                    //         return `${value} ℃`;
                    //     }
                    // },
                    // splitLine: {
                    //     lineStyle: {
                    //         color: '#004C63',
                    //         type: 'dashed'
                    //     }
                    // }
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
        }
    }
};
</script>

<style lang="scss" scoped>
.charts-container {
    width: 80%;
    margin: 100px auto;
    height: 410px;
}
</style>
