// 路径 是否查找子目录 .vue正则
const requireComponent = require.context('./', true, /\.vue$/);
const install = Vue => {
  // if (install.installed) return;
  // install.installed
  requireComponent.keys().map(component => {
    // 拿组件
    const config = requireComponent(component);
    // 拿组件的default 中的name
    const componentName = config.default.name;
    Vue.component(componentName, config.default || config);
  });
};
export default {
  install,
};
