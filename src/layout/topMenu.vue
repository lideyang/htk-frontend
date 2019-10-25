<template>
  <div class="menu-top text-right" ref="menuTop">
    <el-input size="small" class="search-input vertical-align-middle"
              placeholder="请输入内容"
              v-model="searchText">
      <icon-svg slot="prefix" icon-class="icon-fangdajing" />
    </el-input>
    <router-link v-if="userName" :to="{ name: 'login'}"><el-avatar class="vertical-align-middle" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></router-link>
    <el-button v-else class="vertical-align-middle">登录/注册</el-button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "top-menu",
  data() {
    return {
      searchText: ""
    };
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
  .menu-top {
    /deep/ .search-input {
      width: 180px;
      margin: 0 15px 0 0;

      .svg-icon {
        margin: 5px 0 0;
      }
    }
  }
</style>