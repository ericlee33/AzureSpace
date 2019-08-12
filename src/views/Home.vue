<template>
  <div class="home-container">
    <transition class="hello"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="helloWords" v-show="helloFlag" ref="hello">123213</div>
    </transition>

    <div class="about-me">
      123123123123123123123123123123123123123123123123123123123123123123123123123123
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      helloFlag: true
    }
  },
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
  enterCancelled: function (el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}

</script>

<style lang="less" scoped>
.home-container {
  .helloWords {
    position: absolute;
    color: white;
  }
}
</style>