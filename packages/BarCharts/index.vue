<template>
    <div :id="chartId" class="charts-container" />
</template>
<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入折线图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { TitleComponent, GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([CanvasRenderer, BarChart, TitleComponent, GridComponent, TooltipComponent, LegendComponent]);
export default {
    name: "BarCharts",
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
            // 基于准  备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById(this.chartId));
            var option = {
                title: {
                    text: '某大学清纯校花排行榜',
                    subtext: '数据来自火星(纯属虚构)'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['人气排行','粉丝排行']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['依依', '子怡', '婷婷', '静初', '都灵', '灿灿', '菲茗']
                },
                series: [
                    {
                        name: '人气排行',
                        type: 'bar',
                        data: [182203, 282203, 382203, 482203, 582203, 682203, 782203].sort()
                    },
                    {
                        name: '粉丝排行',
                        type: 'bar',
                        data: [119203, 202203, 312203, 402203, 520203, 602203, 702203].sort()
                    }
                ]
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
