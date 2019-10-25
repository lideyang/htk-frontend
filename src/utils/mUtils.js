import {setToken} from "@/utils/auth";
import dayjs from "dayjs";

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  let value = window.localStorage.getItem(name);
  if (value !== null) {
    try {
      value = JSON.parse(value);
    } catch (e) {
      console.error(e);
    }
  }
  return value;
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/** 时间格式转换
 * @param {string}
 * @param {type}
 *   type == 1 ---> "yyyy-mm-dd hh:MM:ss.fff"
 *   type == 2 ---> "yyyymmddhhMMss"
 *   type == '' ---> "yyyy-mm-dd hh:MM:ss"
 */
export const formatDate = (date, type) => {
  return dayjs(date).format(type);
};

/**
 * 判断空值
 */
export const isEmpty = (keys) => {
  if (typeof keys === "string") {
    keys = keys.replace(/"|&nbsp;|\\/g, "").replace(/(^\s*)|(\s*$)/g, "");
    if (keys == "" || keys == null || keys == "null" || keys === "undefined") {
      return true;
    } else {
      return false;
    }
  } else if (typeof keys === "undefined") {  // 未定义
    return true;
  } else if (typeof keys === "number") {
    return false;
  } else if (typeof keys === "boolean") {
    return false;
  } else if (typeof keys == "object") {
    if (JSON.stringify(keys) == "{}") {
      return true;
    } else if (keys == null) { // null
      return true;
    } else {
      return false;
    }
  }

  if (keys instanceof Array && keys.length == 0) {// 数组
    return true;
  }

};

/**
 * 返回两位的小数的字符串
 */
export const toFixedNum = (num) => {
  const tonum = Number(num).toFixed(2);
  return tonum;
};

export const showMessage = () => {
  this.$message({
    showClose: true,
    message: "对不起，您暂无此操作权限~",
    type: "success"
  });
};

/**
 * 读取base64
 */
export const readFile = file => {
  console.log(file);
  //var file = this.files[0];
  //判断是否是图片类型
  if (!/image\/\w+/.test(file.raw.type)) {
    alert("只能选择图片");
    return false;
  }
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    var filedata = {
      filename: file.name,
      filebase64: e.target.result
    };
    alert(e.target.result);
  };
};

/**
 * 动态插入css
 */
export const loadStyle = url => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
};

export const param2Obj = url => {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse("{\"" + decodeURIComponent(search).replace(/"/g, "\\\"").replace(/&/g, "\",\"").replace(/=/g, "\":\"") + "\"}");
};

//是否为正整数
export const isInteger = (s) => {
  var re = /^[0-9]+$/;
  return re.test(s);
};

export const setContentHeight = (that, ele, height) => {
  that.$nextTick(() => {
    ele.style.height = (document.body.clientHeight - height) + "px";
  });
};

export const changeLocale = (type) => {
  setToken("lang", type);
  this.$i18n.locale = type;
};

//函数防抖
const debounce = (func, wait) => {
  let timer;
  return function () {
    const that = arguments.callee;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(that);
    }, wait);
  };
};