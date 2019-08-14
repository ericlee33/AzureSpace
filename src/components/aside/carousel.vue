<template>
  <div>
    <!-- <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in images" :key="item.src">
          <img :src="item.src" alt="" ref="cimages">
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <swiper-slide v-for='item in images' :key="item.id">
          <img :src="item.src" class="swiper-img">
        </swiper-slide> 
        <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
     swiperOption: {
        autoplay: {
          autoplay: 2000,
          disableOnInteraction: false,//放置触摸后自动轮播停止
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        loop:true,
      },
      images: [
        {
          id:1,
          src:require('../../assets/images/carousel/carousel1.png')
        },
        {
          id:2,
          src:require('../../assets/images/carousel/carousel2.png')
        },
        {
          id:3,
          src:require('../../assets/images/carousel/carousel3.png')
        }
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  img{
    width: 100%;
    height: 350px;
  }
}
</style>