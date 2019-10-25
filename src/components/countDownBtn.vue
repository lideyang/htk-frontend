<template>
  <el-button :class="className" @click="onClickBtnHandle" :disabled="isStart">
    {{codeBtn.text}}
  </el-button>
</template>

<script>
let codeBtn = {
  Tid: null
};
export default {
  name: "countDownBtn",
  props: {
    btnText: {
      type: String,
      default: "获取手机验证码"
    },
    className: {
      type: String,
      default: ""
    },
    countTime: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      codeBtn: {
        text: this.btnText
      },
      isStart: false
    };
  },
  methods: {
    startCount() {
      if (!this.isStart) {
        this.isStart = true;
        this.countDown(this.countTime);
      }
    },
    onClickBtnHandle(event) {
      if (!this.isStart) {
        this.$emit("onClick");
      }
    },
    countDown(time) {
      let count = time;
      codeBtn.Tid = setInterval(() => {
        if (count > 0) {
          count--;
          this.codeBtn.text = "剩余" + count + "秒";
        } else {
          this.countEnd();
        }
      }, 1000);
    },
    countEnd() {//倒计时结束
      clearInterval(codeBtn.Tid);
      this.codeBtn.text = this.btnText;
      this.isStart = false;
      this.$emit("onEnd");
    }
  }
};
</script>

<style scoped>

</style>
