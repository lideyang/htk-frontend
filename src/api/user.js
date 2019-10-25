import request from "@/utils/axios";


export function login(params) {
  return request({
    url: "/user/login",
    method: "post",
    data:params
  });
}

export function logout(params) {
  return request({
    url: "/user/logout",
    method: "get",
    data:params
  });
}

export function getUserInfo(params) {
  return request({
    url: "/user/info/get",
    method: "get",
    data:params
  });
}

export function getUserMobileCode(params) {
  return request({
    url: "/user/mobile/code",
    method: "get",
    data:params
  });
}
