<template>
  <div class="layout-layer" id="app">
    <head-nav></head-nav>
    <main-content></main-content>
    <footer-nav></footer-nav>
    <back-top></back-top>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HeadNav from "@/layout/headNav";
import MainContent from "@/layout/content";
import FooterNav from "@/layout/footerNav";
import backTop from "@/components/backTop";

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  components: {
    HeadNav,
    MainContent,
    FooterNav,
    backTop
  },
  created() {
  },
  mounted() {
    this.$i18n.locale = "tw";
  },
  watch: {}
};
</script>

<style lang="less">
  @import './style/variables';
  @import './style/element-ui';
  @import './style/common';

  .layout-layer {
    position: relative;
    min-height: 100%;
  }
</style>
