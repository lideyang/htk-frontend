import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // Progress 进度条
process.env.NODE_ENV === "development" && import("nprogress/nprogress.css");
import {Message} from "element-ui";
import {getToken} from "@/utils/auth"; // 验权(从cookie中获取)
import {getUserInfo} from "@/api/user";
import {asyncRouterMap, constantRouterMap} from "@/router";


router.beforeEach((to, from, next) => {
  NProgress.start();
  // 设置浏览器头部标题
  const browserHeaderTitle = to.meta.title;
  if (browserHeaderTitle) {
    window.document.title = `${browserHeaderTitle}-汇课堂`;
  }

  // 点击登录时，拿到了token并存入了cookie,保证页面刷新时,始终可以拿到token
  if (getToken("Token")) {
    if (to.path === "/login") {
      next({path: "/"});
      NProgress.done();
    } else {
      // 用户登录成功之后，每次点击路由都进行了角色的判断;
      if (store.getters.roles.length === 0) {
        let token = getToken("Token");
        getUserInfo({"token": token}).then().then(res => { // 根据token拉取用户信息
          let userList = res.data.userList;
          store.commit("SET_ROLES", userList.roles);
          store.commit("SET_NAME", userList.name);
          store.commit("SET_AVATAR", userList.avatar);
          store.dispatch("GenerateRoutes", {"routers": asyncRouterMap}).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters); // 动态添加可访问权限路由表
            next({...to, replace: true}); // hack方法 确保addRoutes已完成
          });
        }).catch((err) => {
          store.dispatch("LogOut").then(() => {
            Message.error(err || "请重新登录");
            next({path: "/"});
          });
        });
      } else {
        next();
      }
    }
  } else {
    if (constantRouterMap.some(item => { //如果有匹配到默认的路由
      return item.path === to.path;
    })) {
      next();
    } else if (asyncRouterMap.some(item => { //如果有匹配到要登录的路由
      return item.path === to.path;
    })) {
      next("/login");

    } else {
      next("/404");
    }
    NProgress.done();
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});