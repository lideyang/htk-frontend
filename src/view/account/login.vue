<template>
  <div class="login-layer">
    <div class="container">
      <el-row :gutter="200">
        <el-col :span="12">需插画组出汇课堂的插画</el-col>
        <el-col class="form-layer" :span="12">
          <h1>汇课堂</h1>
          <h2>学外汇，上汇课堂！</h2>
          <p class="text-right">汇聊老用户？点这里账密登录</p>
          <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" class="login-form">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-select v-model="loginForm.region">
                  <el-option
                    v-for="item in regionOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="16">
                <el-form-item prop="mobile">
                  <el-input v-model="loginForm.mobile" maxlength="11" placeholder="请输入手机号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item prop="code">
                  <el-input v-model="loginForm.code" maxlength="4" placeholder="请输入验证码"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <count-down-btn @onClick="onClickSendSMSHandle" ref="sendSMSBtn"
                                class-name="btn-block"></count-down-btn>
              </el-col>
            </el-row>
            <p class="text-muted">未注册用户将自动创建帐号</p>
            <p>
              <el-button class="submit-btn btn-block" :loading="submitBtn.loading" type="primary"
                         @click="onSubmitFormHandle">登录/注册
              </el-button>
            </p>
            <p class="text-sm">注册登录即代表您已同意
              <a class="text-primary">《汇课堂用户协议》</a>
            </p>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as api from "@/api/user";
import {setToken} from "@/utils/auth";
import * as validator from "@/utils/validator";
import {mapMutations} from "vuex";
import * as types from "@/store/types";
import countDownBtn from "@/components/countDownBtn";

export default {
  components: {
    countDownBtn
  },
  data() {
    return {
      loginForm: {
        region: 86,
        mobile: "",
        code: ""
      },
      rules: {
        mobile: [
          {validator: validator.mobile, trigger: "blur"}
        ],
        code: [
          {validator: validator.mobileCode, trigger: "blur"}
        ],
      },
      regionOpt: [{
        value: 86,
        label: "+86 中国大陆"
      }, {
        value: 886,
        label: "+886 中国香港"
      }, {
        value: 852,
        label: "+852 中国台湾"
      }, {
        value: 853,
        label: "+853 中国澳门"
      }],
      submitBtn: {
        loading: false
      }
    };
  },
  created() {
    this[types.USER_SET_NAME]("");//清除vuex的用户名，方便看退出后效果
  },
  mounted() {
  },
  methods: {
    ...mapMutations([types.USER_SET_NAME]),
    onClickSendSMSHandle() {//点击获取验证码
      this.$refs["loginForm"].validateField("mobile", error => {//验证手机号码输入框
        if (!error) {
          api.getUserMobileCode().then(res => {

          }).finally(
            this.$refs["sendSMSBtn"].startCount()
          );
        }
      });

    },
    onSubmitFormHandle() {//提交表单
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          this.submitBtn.loading = true;
          let userInfo = this.loginForm;
          api.login(userInfo).then(res => {
            let userList = res.data.userList;
            setToken("Token", userList.token);
            this.$router.push({path: "/"});
          }).finally(() => {
            this.submitBtn.loading = false;
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
  @import "~@/style/view/account/login.less";
</style>
