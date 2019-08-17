<template>
  <div id="app">
    <!-- 引入头部组件 --> 
    <Header></Header>

    <div class="w app-content">

      <div class="container">
        <router-view/>
      </div>

      <!-- 引入右侧边栏组件 -->
      <Aside id="aside"></Aside>
      <!-- 清除浮动影响,为了让container左右阴影不被overflow:hidden替代,使用clear:both -->
      <div class="clear"></div>
    </div>
    <!-- 引入底部组件 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Aside from '../../components/Aside.vue'

export default {
  data(){
    return {
      
    }
  },
  methods: {
    open() {
      this.$notify({
        message: '欢迎来到我的空间,在这里可以畅所欲言哦!',
        duration: 3500,
        offset: 200
      })
    }
  },
  mounted() {
    this.open()
  },
  components: {
    Header,
    Footer,
    Aside
  }
}
</script>
<style lang="less">
html {
  height: 100%;
  width: 100%;
  background: url('../../assets/images/bg-cover.png');
}
.app-content {
  padding: 40px 0;
  min-height:1000px;

  .container {
    width: 60%;
    float: left;
    margin-right: 5%;
  }
  #aside {
    float: left;
    width: 35%;
    padding: 10px;
  }
  .clear {
    clear: both;
  }
}

</style>
