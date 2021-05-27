导入单个组件
import LineCharts from './LineCharts';
LineCharts.install = function (Vue) {
    Vue.component(LineCharts.name, LineCharts);
}
// 导出的对象必须具备一个 install 方法
// export {
//     LineCharts
// };
