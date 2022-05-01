<template>
  <div
    class="custom-banner"
    :class="{
      'vh-30': isToggleVh,
      'products-banner': this.backgroundClassname === 'products-banner',
      'product-banner': this.backgroundClassname === 'product-banner',
      'about-banner': this.backgroundClassname === 'about-banner',
      'favorite-banner': this.backgroundClassname === 'favorite-banner',
      'cart-banner': this.backgroundClassname === 'cart-banner'
    }"
    ref="banner"
  >
    <div class="mask d-flex justify-content-center align-items-center">
      <div class="content" v-if="!isToggleVh">
        <h2 class="text-white fw-bolder rounded fs-1 my-3 mx-2">澳式旅遊 Aus Tour</h2>
        <p class="text-white fs-4 fw-bolder my-0 mx-2">帶你享受澳洲的經典，體驗一次永生難忘</p>
        <router-link class="btn btn-secondary fw-bolder fs-4 px-5 my-3 mx-2" to="/products">
          立即前往選擇景點
        </router-link>
        <div>
          <a class="scroll text-white" href="#" @click.prevent="scrollToHome"><span></span>往下看更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggleVh: false,
      backgroundClassname: '',
    };
  },
  inject: ['mitt'],
  methods: {
    scrollToHome() {
      this.$emit('scroll-to-home', 'home');
    },
  },
  created() {
    if (this.$route.fullPath !== '/home') {
      this.isToggleVh = true;
      if (this.$route.fullPath === '/products') {
        if (this.backgroundClassname !== '') {
          this.$refs.banner.classList.remove(this.backgroundClassname);
        }
        this.backgroundClassname = 'products-banner';
      }
      if (this.$route.fullPath === `/product/${this.$route.params.id}`) {
        if (this.backgroundClassname !== '') {
          this.$refs.banner.classList.remove(this.backgroundClassname);
        }
        this.backgroundClassname = 'product-banner';
      }
      if (this.$route.fullPath === '/about') {
        if (this.backgroundClassname !== '') {
          this.$refs.banner.classList.remove(this.backgroundClassname);
        }
        this.backgroundClassname = 'about-banner';
      }
      if (this.$route.fullPath === '/favorite') {
        if (this.backgroundClassname !== '') {
          this.$refs.banner.classList.remove(this.backgroundClassname);
        }
        this.backgroundClassname = 'favorite-banner';
      }
      if (this.$route.fullPath === '/cart') {
        if (this.backgroundClassname !== '') {
          this.$refs.banner.classList.remove(this.backgroundClassname);
        }
        this.backgroundClassname = 'cart-banner';
      }
    }
  },
  mounted() {},
  beforeUnmount() {
    this.mitt.off('getRoutePath');
  },
};
</script>

<style lang="scss">
.scroll {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  transform: translate(-50%, -50%);
  text-decoration: none;
}

.scroll {
  padding-top: 60px;
}
.scroll span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  transform: rotate(-45deg);
  animation: sdb 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}
@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
</style>
