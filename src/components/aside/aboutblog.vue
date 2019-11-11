<template>
  <div class="aboutblog">
    <p>小站已经在云上漂流了{{ days }}天了！</p>
    <p>欢迎在大家小站上留言:.ﾟヽ(｡◕‿◕｡)ﾉﾟ.:｡+ﾟ</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  computed: {
    days() {
      let s1 = new Date('2019/08/20')
      let s2 = new Date()
      let days = s2.getTime() - s1.getTime()
      let time = parseInt(days / (1000 * 60 * 60 * 24))
      return time
    }
  }
}
</script>

<style lang="less" scoped>
.aboutblog {
  // 名片整体样式
  color: forestgreen;
  font-weight: 1000;
  padding: 4%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 1%;
  box-shadow: 0 0 10px rgba(0,0,0,.3);
  >p {
    &:nth-of-type(2) {
      margin-top: 2%;
    }
  }
}


</style>