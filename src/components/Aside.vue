<template>
  <div class="aside-container">
    
    <aside-carousel />
    <aside-contact />

  </div>
</template>

<script>
import carousel from './aside/carousel.vue'
import contact from './aside/contact.vue'
export default {
 data(){
   return{

   }
 },
  components: {
    'aside-carousel': carousel,
    'aside-contact': contact
  }
}
</script>

<style lang="less" scoped>
.aside-container {
  box-shadow: 0 0 10px azure;
}
</style>