/**
 * Created by lidy on 2019/10/24.
 */
// 表单验证方法
export const mobile = (rule, value, callback) => {
  if (/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的手机号码"));
  }
};

export const mobileCode = (rule, value, callback) => {
  if (value.length === 4) {
    callback();
  } else {
    callback(new Error("请输入正确的手机验证码"));
  }
};