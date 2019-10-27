<template>
  <div class="video-component">
    <video class="video-js" ref="videoDOM"></video>
  </div>
</template>

<script>

import videojs from "video.js";
import "video.js/dist/video-js.css";
import postImg from "@/assets/img/video/thumb.jpg";


export default {
  name: "DefineVideo",
  props: {
    sources: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      animationTextTop: (Math.random() * 80 + 5) + "%",//随机高度
      player: null,//播放器
      timeEight: null,//定时器
    };
  },
  mounted() {

  },
  watch: {
    sources() {
      if (this.sources) {
        this.onChangeVideoUrl(this.sources);
      }
    }
  },
  methods: {
    init(options) {
      this.dealVideoSrc(options);//配置播放器
    },
    //设置8秒定时器，这个8秒是和css里面的动画循环时间一致的
    setTimeEightTop() {
      let self = this;
      self.timeEight = setInterval(() => {
        self.animationTextTop = (Math.random() * 80 + 5) + "%";
        if (self.player && self.player.getChild("RandomButton")) {
          self.player.getChild("RandomButton").eventBusEl_.style.top = self.animationTextTop;
        }
      }, 8000);
    },
    //清楚定时器
    clearTimeEightTop() {
      clearInterval(this.timeEight);
    },
    //配置播放器
    dealVideoSrc(options) {
      let playerOptions = Object.assign({
        width: 800,
        height: 450,
        controls: true,
        autoplay: false,
        preload: "auto",
        loop: false,
        muted: false,
        language: "zh-CN",
        playbackRates: [0.7, 1.0, 1.2, 1.5, 2.0],
        poster: postImg,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          volumePanel: {
            inline: false
          },
          PictureInPictureToggle: false,//隐藏画中画
          currentTimeDisplay: true,//当前播放时间
          timeDivider: true,//时间中间的分割线
          durationDisplay: true,//视频全部时间
          remainingTimeDisplay: false,//视频剩余时间
        },
      }, options);
      this.player = videojs(this.$refs["videoDOM"], playerOptions, function onPlayerReady() {
        console.log("onPlayerReady");
      });
      this.createMyButton();
    },
    //改变播放内容
    onChangeVideoUrl({url, type = "video/mp4"}) {
      if (this.player) {
        this.player.src({src: url, type});
        this.player.play();
      }
    },
    //创建自定义video标识组件
    createMyButton() {
      let Button = videojs.getComponent("Button");
      let RandomButton = videojs.extend(Button, {
        //这个就这么抄着，必需
        constructor: function (player, options) {
          Button.apply(this, arguments);
        },
        //自定义组件被点击后的事件
        handleClick: () => {
          var isPaused = this.player.tech_.el_.paused;
          if (!isPaused) {
            this.player.pause();
          } else {
            this.player.play();
          }
        },
        // 创建一个DOM元素
        createEl: function () {
          //这个类名在css中要用到，很重要
          var divObj = videojs.dom.createEl("div", {
            className: "momodefine",
          });
          videojs.dom.appendContent(divObj, this.options_.text);
          return divObj;
        },
      });
      //注册视频中随机位置滚动的组件
      videojs.registerComponent("RandomButton", RandomButton);
      //将组件添加到播放器中
      this.player.addChild("RandomButton", {
        text: "dasdasd341234123"
      });
      //调用定时器
      this.setTimeEightTop();
    },
  },
  //离开页面后销毁播放器，定时器
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
    this.clearTimeEightTop();
  },
};
</script>

<style scoped>

  .momodefine {
    color: #fff !important;
    font-size: 16px;
    text-shadow: 2px 2px #333;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    position: absolute !important;
    animation: momoAnimationTextF 8s linear infinite; /* js中的8秒，原因在这里 */
    z-index: 101;
    left: 50%;
    top: 300px;
  }

  @keyframes momoAnimationTextF {
    from {
      left: -10px;
      transform: translateX(-100%);
    }
    to {
      left: 101%;
      transform: translateX(0); /* left 101%是因为不让客户看到闪动的高度变化 */
    }
  }
</style>