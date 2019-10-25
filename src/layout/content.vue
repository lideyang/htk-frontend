<template>
  <div class="main-content">
    <transition name="fade">
      <router-view class="app-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  created() {

  },
  mounted() {

  }
};
</script>

<style scoped lang='less'>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .main-content {
    position: relative;
    padding-bottom: 380px;

    .app-view {
      position: absolute;
      width: 100%;
    }
  }
</style>
