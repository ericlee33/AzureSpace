<template>
  <div class="aside-container">
    <!-- 日历 -->
    <div class="calender">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>
</template>

<script>

export default {
  data() {
      return {
        value: new Date()
      }
    }
}

</script>

<style lang="less" scoped>
.aside-container {
  background-color: rgba(0,0,0,0.05);
  box-shadow: 0 0 10px azure;

  .calendar {
    height: 100px;
  }
}
</style>