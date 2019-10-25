import * as types from "../types";

const permission = {
  state: {
    rightMenu: {
      visible: true
    }
  },
  getters: {
    rightMenuVisible: state => state.rightMenu.visible, // 右侧菜单是否显示
  },
  actions: {},
  mutations: {
    [types.SET_RIGHT_MENU_VISIBLE]: (state, visible) => {
      state.rightMenu.visible = visible; // 设置右侧菜单是否显示
    }
  }
};

export default permission;
