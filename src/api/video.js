import request from "@/utils/axios";

export function getVideoDetailChapterList(params) {
  return request({
    url: "/article/get",
    method: "get",
    params: params
  });
}