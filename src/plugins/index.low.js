import message from './message/Message.vue';
import button from './button/Button.vue';
let plugins = {};
plugins.install = function(Vue) {
  // 第一种 多个插件堆在下面方法比较low
  Vue.component(message.name, message);
  Vue.component(button.name, button);

  // 另外2种写（插件）的方法 举例写在这里
  // // 第二种 添加全局属性或方法 什么场景使用?
  // Vue.prototype.$msg = '我是msg';
  // Vue.prototype.$msgMethod = () => {
  //   console.log('我是msgMethod');
  // };

  // // 第三种 高频用到的 自定义指令
  // Vue.directive('focus', {
  //   inserted: function(el) {
  //     el.focus();
  //   },
  // });
};
export default plugins;
