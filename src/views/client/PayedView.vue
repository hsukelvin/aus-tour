<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center">
        <div class="bg-light py-4 px-2 px-sm-4">
          <img
            class="img-fluid mb-4"
            src="../../assets/success.png"
            alt="success_img"
            style="width: 50px;"
          >
          <h2 class="fw-bolder mb-4">付款完成</h2>
          <p class="fs-5 mb-4">您的訂單編號 : <span class="fw-bolder">{{ orderId }}</span></p>
          <p class="fs-5 mb-4">感謝您的支持，後續會盡快連絡您，為您實現暢遊您所購買的景點~</p>
          <div>
            <router-link class="btn btn-primary mx-1 mx-sm-5" to="/products">
              <font-awesome-icon
                type="button"
                :icon="['fas', 'arrow-left']"
                class="pe-2"
              />
              繼續選購
            </router-link>
            <router-link class="btn btn-primary mx-1 mx-sm-5" to="/home">
              返回首頁
              <font-awesome-icon
                type="button"
                :icon="['fas', 'arrow-right']"
                class="ps-2"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.orderId = id;
  },
};
</script>
