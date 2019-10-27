import Vue from "vue";
import Router from "vue-router";


process.env.NODE_ENV === "development" ? Vue.use(Router) : null;

//默认不需要权限的页面
export const constantRouterMap = [
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录注册",
    },
    component: () => import("@/view/account/login")
  },
  {
    path: "/404",
    component: () => import("@/view/errorPage/404")
  },
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("@/view/index")
  },
  {
    path: "/video/detail",
    name: "videoDetail",
    meta: {
      title: "视频详情",
    },
    component: () => import("@/view/video/detail")
  },
];

//注册路由
export default new Router({
  mode: "history", // 默认为'hash'模式
  base: "/", // 添加跟目录,对应服务器部署子目录
  routes: constantRouterMap
});

//异步路由（需要权限的页面）
export const asyncRouterMap = [
  {
    path: "/permission",
    name: "permission",
    meta: {
      title: "我的收藏"
    },
  },
];


