<template>
  <div id="app">
    <!-- 引入头部组件 -->
    <Header></Header>

    <div class="w content">

      <div class="container">
        <router-view/>
      </div>

      <!-- 引入右侧边栏组件 -->
      <Aside id="aside"></Aside>
    </div>
    <!-- 引入底部组件 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Aside from './components/Aside.vue'

export default {
  data(){
    return {

    }
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
  background: url('./assets/images/bg-cover.png');
}
.content {
  padding: 40px 0;
  overflow: hidden;

  .container {
    width: 60%;
    float: left;
    margin-right: 5%;
    background: url('./assets/images/bg-cover.png');
  }
  #aside {
    float: left;
    width: 35%;
    padding: 30px;
  }
}

</style>
