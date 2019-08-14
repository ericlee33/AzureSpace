<template>
  <div class="messageBoard-container">
    <ms-bd-ct />
  </div>
</template>

<script>
import comment from '../components/subcomponents/comment.vue'

export default {
  data(){
    return{

    }
  },
  methods: {
  },
  components:{
    'ms-bd-ct':comment
  }
}
</script>

<style lang="less" scoped>
.messageBoard-container {
  el-form {
    &:last-child{
      el-input{
        height: 1000px;
      }
    }
  }
}
</style>