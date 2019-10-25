import request from "@/utils/axios";

export function getArticleTableList(params) {
  return request({
    url: "/article/get",
    method: "get",
    params: params
  });
}