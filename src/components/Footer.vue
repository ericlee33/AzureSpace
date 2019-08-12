<template>
  <div class="footer">
    <div class="w">
      <div class="copyright">Copyright © 2019, azure All Rights Reserved</div>
    </div>
  </div>
</template>

<script>

export default {
  
}

</script>

<style lang="less" scoped>
.footer {
  height: 150px;
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
  .w {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .copyright {
      color: coral;
      font-size: 20px;
    }
  }
}
</style>