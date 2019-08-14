<template>
  <div id="header-container" class="header-container">
    
    <!-- 实现导航栏吸顶 -->
    <div :class="navBarFixed == true ? 'navBarWrap' :''">

        <div class="nav-container w">
          <!-- 导航栏以及logo -->
          <h1 class="logo" >AzureSpace</h1>
          <ul>
            <router-link to="/bloglist">首页</router-link>
            <router-link to="/newslist">新闻</router-link>
            <router-link to="/messageboard">留言板</router-link>
            <router-link to="/register">登录</router-link>
            <router-link to="/aboutme">关于我</router-link>
          </ul>
        </div>

    </div>

    <transition class="hello"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="helloWords" v-show="helloFlag" ref="hello">hello!</div>
    </transition>
  </div>

</template>

<script>
export default {
  data() {
    return {
      navName:'',
      navBarFixed: false,
      helloFlag: true
    }
  },
  methods: {
    // 实现吸顶
    watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
     },



    // 动画生命周期钩子
    beforeEnter: function (el) {
    
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      // ...
      done()
    },
    afterEnter: function (el) {
      // ...
    },
   },


  mounted () {
    // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
  }
}

</script>

<style lang="less" scoped>

@colorh: #00ffff;

.header-container {
  background: #060116 url('../assets/images/nav/banner.png') no-repeat right bottom;
  width: 100%;
  height: 500px;
  // 实现视差效果
  background-attachment: fixed;
  position: relative;
  box-shadow: 0 10px 20px skyblue;

  // 吸顶效果
  .navBarWrap {
    position:fixed;
    top:0;
    width: 100%;
    z-index:999;
    background-color: rgba(0,0,0,0.3);
  }

  .nav-container {
    height: 75px;
    line-height: 75px;
    display: flex;
    justify-content: space-between;

    h1 {
      text-indent: -9999em;
      background: url('../assets/images/nav/logo.png') no-repeat;
      width: 200px;
      height: 75px;
      cursor: pointer;
    }
    ul {
      .nav-active {
          color: @colorh;
          background-color: rgba(18, 212, 212, 0.301);
      }

      a {
        height: 75px;
        width: 100px;
        text-align: center;
        display: block;
        float: left;
        padding: 0 10px;
        color: white;

        &:hover {
          color: @colorh;
          background-color: rgba(18, 212, 212, 0.301);
        }
      }
    }
  }
}

.helloWords {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: white;
}
</style>