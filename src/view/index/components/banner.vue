<template>
  <div class="home-banner-layer" ref="homeBannerLayer">
    <el-carousel class="advert-banner" height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang="less" scoped>
  .home-banner-layer {
    .advert-banner h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .advert-banner:nth-child(2n) {
      background-color: #99a9bf;
    }

    .advert-banner:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }

</style>
