// 引入公共样式表文件
import "bootstrap/bootstrap.css";
// 引入 私有样式表
import "./style.css";

// 引入 vue-router 组件：
import Vue from "vue";
import VueRouter from "vue-router";

// 引入 vue 模版
import index from './component/index.vue';
// 流式布局
import fluid from './component/fluid.vue';
// 弹性布局：新老对比
import flexOldNew from './component/flex-old-new.vue';
// 旧 弹性布局 属性
import oldflexBoxAlign from './component/oldflex-box-align.vue';
import oldflexBoxPack from './component/oldflex-box-pack.vue';
// 弹性布局
import flexLayOut from './component/newflex-flex.vue';
import flexOrder from './component/newflex-order.vue';
// 多列布局
import columns from './component/columns.vue';
// 网格布局
import grid from './component/grid.vue';
// 表格布局
import table from './component/table.vue';
// css3相关
import css3BorderRadius from './component/css3-border-radius.vue';
import css3SelectorChecked from './component/css3-selector-checked.vue';
import css3SelectorTarget from './component/css3-selector-target.vue';
import css3AninimalSteps from './component/css3-aninimal-steps().vue';
import css3Calc from './component/css3-calc().vue';
import jianjiao from './component/jianjiao.vue';
import css3AnimalGradient from './component/css3-animal-gradient.vue';
import css3Add from './component/css3-add.vue';
// html5相关
import html5Meta from './component/html5-meta.vue';
import html5VideoAudio from './component/html5-video-audio.vue';
import html5Location from './component/html5-location.vue';
import html5WebWorks from './component/html5-web-works.vue';
// 开发调试相关
import webpackInfo from './component/webpack-info.vue';
import devFtlNode from './component/dev-ftl-node';
import devWeinre from './component/dev-weinre';
import devBrowsersync from './component/dev-browsersync';

// 创建 router 实例
Vue.use(VueRouter);

const router = new VueRouter({
    linkActiveClass: "active",
    routes: [
        { path: '/', name: 'index', component: index },
        { path: '/fluid', name: '流式布局', component: fluid },
        { path: '/flex-old-new', name: '弹性布局(新老对比)', component: flexOldNew },
        { path: '/oldflex-box-align', name: '弹性布局(旧)-box-align', component: oldflexBoxAlign },
        { path: '/oldflex-box-pack', name: '弹性布局(旧)-pack', component: oldflexBoxPack },

        { path: '/newflex-flex', name: '弹性布局-flex', component: flexLayOut },
        { path: '/newflex-order', name: '弹性布局-order', component: flexOrder },

        { path: '/columns', name: '多列布局', component: columns },
        { path: '/grid', name: '网格布局', component: grid },

        { path: '/table', name: '表格布局', component: table },
        // { path: '/webpack-info', name: 'webpack总结', component: webpackInfoTpl },

        { path: '/css3-border-radius', name: 'css3-border-radius', component: css3BorderRadius },
        { path: '/css3-selector-checked', name: 'css3-selector-checked', component: css3SelectorChecked },
        { path: '/css3-selector-target', name: 'css3-selector-target', component: css3SelectorTarget },
        { path: '/css3-aninimal-steps', name: 'css3-aninimal-steps()', component: css3AninimalSteps },
        { path: '/css3-calc', name: 'css3-calc()', component: css3Calc },
        { path: '/jianjiao', name: '尖角', component: jianjiao },
        { path: '/css3-animal-gradient', name: 'css3动画背景渐变', component: css3AnimalGradient },
        { path: '/css3-add', name: 'css3-易忽略的属性', component: css3Add },


        { path: '/html5-meta', name: 'html5-meta', component: html5Meta },
        { path: '/html5-video-audio', name: 'html5-video-audio', component: html5VideoAudio },
        { path: '/html5-location', name: 'html5-地理定位', component: html5Location },
        { path: '/html5-web-works', name: 'html5-web-works', component: html5WebWorks },

        { path: '/webpack-info', name: 'webpack服务器小结', component: webpackInfo },
        { path: '/dev-ftl-node', name: 'ftl-node服务器', component: devFtlNode },
        { path: '/dev-weinre', name: 'weinre服务器使用', component: devWeinre },
        { path: '/dev-browsersync', name: 'Browsersync多端远程调试', component: devBrowsersync }
    ]
});

// 创建和挂载根实例。

// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app')
