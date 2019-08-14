<template>
  <div class="footer-container">
    <div class="w footer">
      <p>Azure的个人空间</p>
      <p class="copyright">Copyright © 2019, azure All Rights Reserved</p>
    </div>
  </div>
</template>

<script>

export default {
  
}

</script>

<style lang="less" scoped>
.footer-container {
  min-height: 125px;
  background: url('../assets/images/footer/footer-image.png') no-repeat center center;
  position: relative;
  &::before {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
  }
  .footer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    p {
      margin-top: 10px;
      color: #333;
      font-weight: 700;
      font-size: 20px;
    }
  }
}
</style>