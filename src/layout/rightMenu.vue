<template>
  <ul class="menu-right text-center" ref="menuTop">
    <li>
      <el-popover popper-class="app-download-pop" placement="left" trigger="click">
        <div><img class="app-code-pic" src="@/assets/img/fx110_code.jpg" /></div>
        <i slot="reference" class="el-icon-mobile"></i>
      </el-popover>
    </li>
    <li><i class="el-icon-edit-outline"></i></li>
    <li>
      <back-top></back-top>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from "vuex";
import backTop from "@/components/backTop";

export default {
  name: "topMenu",
  data() {
    return {
      searchText: ""
    };
  },
  components: {
    backTop
  },
  computed: {
    ...mapGetters(["userName"])
  },
  created() {

  },
  mounted() {
  },
  methods: {},
  watch: {}
};

</script>

<style lang="less" scoped>
  .menu-right {
    position: fixed;
    top: 50%;
    right: 0;
    margin-top: -100px;
    width: 56px;
    background-color: #fff;
    border-radius: 5px 0 0 5px;
    z-index: 999;
    box-shadow: 0 0 10px rgba(250, 250, 250, .65);

    li {
      position: relative;
      margin: 0 0 10px;
      cursor: pointer;

      i {
        font-size: 30px;
      }
    }
  }

  .app-download-pop {
    .app-code-pic {
      width: 200px;
    }
  }
</style>