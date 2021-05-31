<template>
    <div id="charts-container" />
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
import * as echarts from "echarts";
// import { CanvasRenderer } from "echarts/renderers";
// import { TitleComponent, GridComponent, TooltipComponent, LegendComponent } from "echarts/components";
// echarts.use([CanvasRenderer, TitleComponent, GridComponent, TooltipComponent, LegendComponent]);
/**
 * 获取N天前的时间戳
 * @param day
 * @return {number}
 */
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
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }]
            };
            myChart.setOption(option);
        }
    }
};
</script>

<style lang="scss" scoped>
#charts-container {
    width: 100%;
    height: 410px;
}
</style>
