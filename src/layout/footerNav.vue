<template>
  <footer class="footer-layer">
    <div class="container">
      <div class="wrapper">
        <img class="logo vertical-align-middle" src="@/assets/img/fx110_logo.png" />
        <h2 class="inline-block vertical-align-middle">汇课堂</h2>
      </div>
      <div class="wrapper company-introduce">
        <el-row>
          <el-col :span="8">
            <p><strong>拜伦集团是外汇行业的龙头标杆，致力为外汇行业提供专业系统的学习服务。</strong></p>
            <p><strong>让希望进入外汇行业的人员、行业内人员、炒汇人员学习相关知识，提高自身水平。</strong></p>
            <p><strong>学外汇，上汇课堂！</strong></p>
          </el-col>
          <el-col class="text-muted text-right" :span="10" :offset="6">
            <p>增值电信业务经营许可证 京XX-XXXXXXXX</p>
            <p>京ICP备XXXXXXXXXX</p>
            <p>网络文化经营许可证京网文[2019]XXXXX</p>
            <p>京公网安备 XXXXXXXXx</p>
            <p>All Rights Reserved Bailun company</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </footer>
</template>


<script>

export default {
  name: "footerNav",
  data() {
    return {};
  },
  created() {

  },
  methods: {}
};
</script>

<style lang="less">
  .footer-layer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f7f7f7;

    .wrapper {
      padding: 30px 0;
      border-bottom: 1px solid #eaeaea;

      .logo {
        width: 240px;
        margin: 0 30px 0 0;
      }

      &.company-introduce {
        p {
          margin: 0 0 20px;
        }
      }
    }
  }
</style>


