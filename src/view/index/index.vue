<template>
  <div class="home-layer" ref="homeLayer">
    <banner></banner>
  </div>
</template>

<script>
import Banner from "./components/banner";
import {mapMutations} from "vuex";
import * as types from "@/store/types";

export default {
  data() {
    return {};
  },
  components: {
    Banner
  },
  created() {
    this[types.USER_SET_NAME]("me");//这里是给vuex赋值写死的登录用户名，方便看效果
  },
  mounted() {
  },
  methods: {
    ...mapMutations([types.USER_SET_NAME])
  }
};
</script>

<style lang="less" scoped>
  @import "~@/style/view/home/index.less";
</style>
