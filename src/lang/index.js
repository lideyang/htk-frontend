
// 引入i18n国际化插件
import { getToken} from "@/utils/auth";
import Vue from "vue";
import VueI18n from "vue-i18n";
process.env.NODE_ENV === "development" ? Vue.use(VueI18n) : null;


import cnLocale from "./cn";
import twLocale from "./tw";
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: getToken("lang") || "cn",
  messages: {
    cn: {
      ...cnLocale
    },
    tw: {
      ...twLocale
    },
  }
});

export default i18n;