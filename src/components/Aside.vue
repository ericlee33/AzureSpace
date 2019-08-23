<template>
  <div class="aside-container">
    <!-- 轮播图 -->
    <aside-carousel />
    <!-- 联系我 -->
    <aside-contact />
    <!-- 留言板 -->
    <aside-message />

  </div>
</template>

<script>
import carousel from './aside/carousel.vue'
import contact from './aside/contact.vue'
import message from './aside/message.vue'

export default {
 data(){
   return{

   }
 },
  components: {
    'aside-carousel': carousel,
    'aside-contact': contact,
    'aside-message': message
  }
}
</script>

<style lang="less" scoped>
.aside-container {
  box-shadow: 0 0 10px azure;
}
</style>