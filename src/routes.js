import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import('./views/Login.vue'),
      name: '',
      hidden: true
    },
    {
      path: '/404',
      component: () => import('./views/404.vue'),
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      iconCls: 'el-icon-odometer', // 图标样式class
      name: '主页',
      children: [
        { path: '/dashboard', component: () => import('./views/dashboard/Dashboard.vue'), name: '仪表盘', iconCls: 'el-icon-odometer' }
      ]
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: '实施概况',
      iconCls: 'el-icon-s-marketing',
      children: [
        { path: '/userOnline', component: () => import('./views/onlineChart/UserOnline.vue'), name: '实时在线' },
        { path: '/orderOnline', component: () => import('./views/onlineChart/OrderOnline.vue'), name: '实时订购' },
        { path: '/pvuvOnline', component: () => import('./views/onlineChart/PVUVOnline.vue'), name: '整体PV/UV' }
      ]
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: '流量分析',
      iconCls: 'el-icon-pie-chart',
      children: [
        { path: '/flowAna', component: () => import('./views/takeRelChart/FlowAna.vue'), name: '页面流向' },
        { path: '/pageHot', component: () => import('./views/takeRelChart/PageHot.vue'), name: '页面热点' },
        { path: '/subjectAna', component: () => import('./views/takeRelChart/SubjectAna.vue'), name: '专题流量' }
      ]
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: '订购分析',
      iconCls: 'el-icon-shopping-cart-full',
      children: [
        { path: '/orderAna', component: () => import('./views/orderAna/OrderAna.vue'), name: '订购/退订信息' },
        { path: '/orderSource', component: () => import('./views/orderAna/OrderSource.vue'), name: '订购来源' }
      ]
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: '用户分析',
      iconCls: 'el-icon-picture-outline-round',
      children: [
        { path: '/newAddUser', component: () => import('./views/userRelChart/NewAddUser.vue'), name: '用户新增留存' },
        { path: '/activeUser', component: () => import('./views/userRelChart/ActiveUser.vue'), name: '用户活跃' },
        { path: '/useTime', component: () => import('./views/userRelChart/UseTime.vue'), name: '用户使用时长' },
        { path: '/playTime', component: () => import('./views/userRelChart/PlayTime.vue'), name: '用户播放时长' }
      ]
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: '内容分析',
      iconCls: 'el-icon-s-data',
      children: [
        { path: '/playCountAna', component: () => import('./views/contentRelChart/PlayCountAna.vue'), name: '播放次数统计' },
        { path: '/contentProvider', component: () => import('./views/contentRelChart/ContentProviderTop.vue'), name: '内容提供商排行' },
        { path: '/searchKeyTop', component: () => import('./views/contentRelChart/SearchKeyTop.vue'), name: '搜索关键字排行' },
        { path: '/collectTop', component: () => import('./views/contentRelChart/CollectTop.vue'), name: '收藏排行' }
      ]
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: '系统管理',
      iconCls: 'el-icon-s-custom', // 图标样式class
      children: [
        { path: '/userMsg', component: () => import('./views/powerManager/UserMsg.vue'), name: '用户管理' },
        { path: '/roleMsg', component: () => import('./views/powerManager/RoleMsg.vue'), name: '角色管理' },
        { path: '/authMsg', component: () => import('./views/powerManager/AuthMsg.vue'), name: '权限管理' }
      ]
    },
    /* {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: '后台设置',
      iconCls: 'el-icon-s-tools', // 图标样式class
      children: [
        { path: '/proOrderMsg', component: () => import('./views/biManager/ProOrderMsg.vue'), name: '订购产品维护' }
        /!* { path: '/authmsg', component: () => import('./views/biManager/AuthMsg.vue'), name: '自定义推荐位' } *!/
      ]
    }, */
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
