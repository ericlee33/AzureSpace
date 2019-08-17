<template>
  <div id="header-container" class="header-container">
    <transition 
      enter-active-class="animated rubberBand">
      <div class="deco" v-show="helloFlag"></div>
    </transition>

    <!-- 实现导航栏吸顶 -->
    <div :class="navBarFixed == true ? 'navBarWrap' :'navBar'">

        <div class="nav-container w">
          <!-- 导航栏以及logo -->
          <h1 class="logo" >AzureSpace</h1>
          <ul>
            <router-link to="/bloglist">前端技术</router-link>
            <router-link to="/essaylist">个人随笔</router-link>
            <router-link to="/messageboard">留言板</router-link>
            <router-link to="/newslist">新闻</router-link>
            <router-link to="/register">登录</router-link>
            <router-link to="/aboutme">关于我</router-link>
            <a href="/admin.html">点</a>
          </ul>

          <!-- 注册 -->
          <div class="buttons">
            <register></register>
            <login></login>
          </div>
        </div>

    </div>

    <transition class="hello" enter-active-class="animated rotateInDownLeft">
      <div class="helloWords" v-show="helloFlag">Youth,like the praise of the spring</div>
    </transition>
  </div>

</template>

<script>
import register from './subcomponents/register.vue'
import login from './subcomponents/login.vue'

export default {
  data() {
    return {
      navName:'',
      navBarFixed: false,
      helloFlag: false,

      dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
    show() {
      this.helloFlag = !this.helloFlag
    },


    // 动画生命周期钩子
    beforeEnter: function (el) {
      el.style.transfrom = "translate(0,-293px)"
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      el.offsetWidth
      el.style.transfrom = "translate(0,300px)"
      el.style.transition = "all 1s ease"
      
      // ...
      // done()
    },
    afterEnter: function (el) {
      // ...
    },
   },


  mounted () {
    // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
    this.show()
  },
  components: {
    register,
    login
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

  .deco {
    position: absolute;
    background: url('../assets/images/nav/deco.png');
    height: 293px;
    width: 100%;
  }
  .navBar {
    position: fixed;
    width: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,0.3);
  }
  // 吸顶效果
  .navBarWrap {
    position:fixed;
    top:0;
    width: 100%;
    z-index:999; 
    background-color: rgba(0,0,0,0.3);
  }

  .nav-container {
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;

    h1 {
      text-indent: -9999em;
      background: url('../assets/images/nav/logo.png') no-repeat;
      background-size: contain;
      width: 200px;
      height: 60px;
      cursor: pointer;
    }
    ul {
      .nav-active {
          color: @colorh;
          background-color: rgba(18, 212, 212, 0.301);
      }

      a {
        height: 60px;
        width: 100px;
        text-align: center;
        float: left;
        padding: 0 10px;
        color: white;
        font-weight: bold;

        &:hover {
          color: @colorh;
          background-color: rgba(18, 212, 212, 0.301);
        }
      }
    }
    .buttons {
          width: 120px;
          display: flex;
          justify-content: space-around;
        }
  }
}

.helloWords {
    position: absolute;
    text-align: center;
    width: 400px;
    height: 200px;
    line-height: 200px;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -100px;
    // transform: translate(-50%,-50%);
    color: white;
}
</style>