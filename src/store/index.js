import Vue from "vue";
import Vuex from "vuex";

if (process.env.NODE_ENV === "development") {
  Vue.use(Vuex);
}

import user from "./modules/user";
import common from "./modules/common";
import permission from "./modules/permission";

export default new Vuex.Store({
  modules: {
    common,
    user,
    permission,
  }
});

