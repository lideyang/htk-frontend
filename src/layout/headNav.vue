<template>
  <header class="head-nav">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <img @click="$router.push({name:'home'})" class="logo" src="@/assets/img/fx110_logo.png" />
        </el-col>
        <el-col :span="12">
          <top-menu></top-menu>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";
import topMenu from "./topMenu";


export default {
  name: "headNav",
  data() {
    return {};
  },
  components: {
    topMenu
  },
  computed: {
    ...mapGetters(["name", "avatar", "sidebar"]),
  },
  created() {

  },
  mounted() {
  },
  methods: {}
};
</script>

<style scoped lang='less'>
  .head-nav {
    padding: 15px 0;
    background-color: #757575;

    .logo {
      height: 40px;
    }
  }
</style>
