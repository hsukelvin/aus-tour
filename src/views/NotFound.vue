<template>
  <div class="container-fluid bg-light">
    <div class="row">
      <div class="col-12">
          <div class="d-flex flex-column justify-content-center align-items-center vh-100">
            <img class="img-fluid my-3" src="../assets/no-results.png" alt="NotFound_img">
            <h2 class="text-center fw-bolder my-2">找不到頁面</h2>
            <p class="text-center fw-bolder fs-3 my-2">{{time}}秒後回到首頁</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      time: 3,
    };
  },
  methods: {
    countdown() {
      this.time -= 1;
      if (this.time === 0) {
        clearInterval(this.timer);
        this.backToHomePage();
      }
    },
    backToHomePage() {
      // 用replace跳回/home在按回上一頁不會返回NotFound頁面
      this.$router.replace('/home');
    },
  },
  mounted() {
    this.timer = setInterval(this.countdown, 1000);
  },
  beforeUnmount() {
    console.log('beforeUnmount');
    clearInterval(this.timer);
  },
};
</script>
