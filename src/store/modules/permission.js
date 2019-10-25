import * as types from "../types";
import {constantRouterMap} from "@/router";

const permission = {
  state: {
    routers: constantRouterMap,//默认路由
    addRouters: [],// 权限路由
  },
  getters: {
    permission_routers: state => state.routers, // 所有路由
  },
  actions: {
    // 登录后，重新设置权限路由;并保存到vuex中,SET_ROUTERS;
    GenerateRoutes({commit}, data) {
      return new Promise(resolve => {
        let routers = data.routers;
        let accessedRouters = "";
        if (routers.length) {
          accessedRouters = routers;
        }
        commit(types.SET_ROUTERS, accessedRouters);
        resolve();
      });
    }
  },
  mutations: {
    [types.SET_ROUTERS]: (state, routers) => {
      state.addRouters = routers; // 权限路由
      state.routers = constantRouterMap.concat(routers); // 总路由
    }
  }
};

export default permission;
