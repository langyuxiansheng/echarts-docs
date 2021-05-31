// 导入单个组件
import LineCharts from './LineCharts';
import BarCharts from './BarCharts';
LineCharts.install = function (Vue) {
    Vue.component(LineCharts.name, LineCharts);
}
BarCharts.install = function (Vue) {
    Vue.component(BarCharts.name, BarCharts);
}
// 导出的对象必须具备一个 install 方法
export {
    LineCharts,
    BarCharts
};
