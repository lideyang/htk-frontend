<template>
  <div class="video-detail-layer">
    <el-row>
      <el-col :span="18">
        <video-player :sources="sources" ref="videoPlayer"></video-player>
      </el-col>
      <el-col :span="6">
        <ul class="infinite-list" v-infinite-scroll="onChapterScrollHandle">
          <li :key="i" @click="onChangeChapterHandle" class="infinite-list-item" v-for="i in chapterCount">章节1 章节字数遵
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import videoPlayer from "@/components/videoPlayer";
import * as api from "@/api/video";

export default {
  name: "detail",
  components: {
    videoPlayer
  },
  data() {
    return {
      sources: {},
      chapterCount: 6
    };
  },
  mounted() {
    console.log(this.$refs["videoPlayer"]);
    this.$refs["videoPlayer"].init({
      sources: [{
        type: "video/mp4",
        src: "http://vjs.zencdn.net/v/oceans.mp4",
      }],
    });
    // api.getVideoDetailChapterList().then(res => {
    //   this.$refs["videoPlayer"].init();
    // });
  },
  methods: {
    onChapterScrollHandle() {
      this.chapterCount += 2;
    },
    onChangeChapterHandle() {
      this.sources = {url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"};
    }
  }
};
</script>

<style lang="less" scoped>
  @import "~@/style/view/video/detail.less";
</style>