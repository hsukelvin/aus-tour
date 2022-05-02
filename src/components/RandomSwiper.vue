<template>
  <Loading :active="isLoading" />
  <swiper
    class="px-3 py-2"
    :modules="modules"
    :slides-per-view="1"
    :space-between="20"
    :breakpoints="{
      '320': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '470': {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      '576': {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <router-link :to="`/product/${item.id}`">
        <CarouselCard :product="item" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import {
  A11y, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import CarouselCard from '@/components/CarouselCard.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    CarouselCard,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      modules: [A11y, Autoplay],
    };
  },
  inject: ['mitt'],
  methods: {
    getProducts() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.isLoading = false;
          const { products } = res.data;
          this.products = products;
          console.log(this.products);
          this.getRandom();
        });
    },
    // 亂數取10筆資料渲染
    getRandom() {
      const newArray = [];
      for (let index = 0; index < 10; index += 1) {
        const n = Math.floor(Math.random() * this.products.length);
        newArray.push(this.products[n]);
        this.products.splice(n, 1);
      }
      console.log(newArray);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
  @import 'swiper/scss';
  @import 'swiper/scss/navigation';
</style>
