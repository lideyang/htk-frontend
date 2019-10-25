import * as types from "../types";
import * as mUtils from "@/utils/mUtils";
import {logout, getUserInfo} from "@/api/user";  // 导入用户信息相关接口
import {getToken, setToken, removeToken} from "@/utils/auth";


const user = {
  state: {
    name: "",
    avatar: "",
    token: getToken("Token"),
    roles: []
  },
  getters: {
    token: state => state.token,
    userRoles: state => state.roles,
    userAvatar: state => state.avatar,
    userName: state => state.name
  },
  actions: {
    //登出
    LogOut({commit, reqData}) {
      return new Promise((resolve, reject) => {
        logout(reqData).then(response => {
          commit("SET_ROLES", []);
          commit("SET_NAME", []);
          commit("SET_AVATAR", []);
          removeToken("Token");
          resolve();
        });
      });
    },
    //role和token是相同的;
    ChangeRoles({commit}, role) {
      return new Promise(resolve => {
        const token = role;
        setToken("Token", token);
        getUserInfo({"token": token}).then(res => {
          let data = res.data.userList;
          commit("SET_ROLES", data.roles);
          commit("SET_NAME", data.name);
          commit("SET_AVATAR", data.avatar);
          resolve();
        });
      });
    }
  },
  mutations: {
    [types.SET_ROLES]: (state, roles) => {
      state.roles = roles;
    },
    [types.USER_SET_NAME]: (state, name) => {
      state.name = name;
    },
    [types.SET_AVATAR]: (state, avatar) => {
      state.avatar = avatar;
    }
  }
};

export default user;