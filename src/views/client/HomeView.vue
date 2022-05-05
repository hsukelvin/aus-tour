<template>
  <FrontBanner @scroll-to-home="scrollToHome" />
  <section ref="home">
    <div class="container py-5">
      <h2 class="text-center fw-bolder mb-4">選擇我們的好處</h2>
      <div class="row">
        <div class="col-lg-4 text-center p-0" data-aos="zoom-in" data-aos-duration="1000">
          <div class="shadow m-2 py-2">
            <img class="m-2" src="../../assets/map.png" alt="map" />
            <div>
              <h3 class="m-2">獨創的旅遊行程</h3>
              <p class="m-2" style="height: 3rem">
                所有行程皆為澳洲本地專業人士設計
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center p-0" data-aos="zoom-in" data-aos-duration="1000">
          <div class="shadow m-2 py-2">
            <img class="m-2" src="../../assets/tour-guide.png" alt="guide" />
            <div>
              <h3 class="m-2">私人旅遊導覽</h3>
              <p class="m-2" style="height: 3rem">
                您的專屬私人嚮導會一直同行讓您的旅程不再走馬看花
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center p-0" data-aos="zoom-in" data-aos-duration="1000">
          <div class="shadow m-2 py-2">
            <img class="m-2" src="../../assets/money.png" alt="money" />
            <div>
              <h3 class="m-2">合理划算的價格</h3>
              <p class="m-2" style="height: 3rem">
                以合理的價格享受私人旅遊體驗
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-light">
    <div class="container py-5">
      <div class="text-center">
        <h2 class="fw-bolder">想去哪裡呢?</h2>
        <p>馬上前往選購想去的旅遊地區，從感興趣的地區尋找您的最愛吧！</p>
      </div>
      <div class="row">
        <template v-for="(item, i) in categorysArt" :key="i">
          <a
            href="#"
            class="custom-state col-md-6 col-lg-4 p-0"
            v-if="item.name !== '全部'"
            @click.prevent="goProductsView(item.name)"
            data-aos="zoom-in" data-aos-duration="1000"
          >
            <div
              class="
                background
                d-flex
                justify-content-center
                align-items-center
                m-2
              "
              :style="`background-image: url(${item.img});`"
            >
              <h3 class="underline text-white fw-bolder mb-0">{{ item.name }}</h3>
            </div>
          </a>
        </template>
      </div>
    </div>
  </section>

  <section class="custom-arts">
    <div class="container py-5">
      <h2
        class="text-white fw-bolder py-3"
        data-aos="zoom-in" data-aos-duration="1000"
      >
        你所不知道的遠方，永遠都是值得一去
      </h2>
      <p
        class="text-white fw-bolder text-end fs-2 py-3"
        data-aos="zoom-in" data-aos-duration="1000"
      >
        想要未知的瘋狂，想要聲色的張揚，想要最好的時光在最美地方
      </p>
    </div>
  </section>

  <section>
    <div class="container py-5">
      <h2 class="text-center fw-bolder mb-4">更多景點選擇</h2>
      <div class="px-0" data-aos="fade" data-aos-duration="1000">
        <RandomSwiper />
      </div>
    </div>
  </section>
  <!-- <section>
    <div class="container">
      <h2>旅遊文章推薦</h2>
    </div>
  </section> -->
</template>

<script>
import FrontBanner from '@/components/FrontBanner.vue';
import RandomSwiper from '@/components/RandomSwiper.vue';
import categoryObjectData from '@/data/categoryObjectData';

export default {
  components: {
    FrontBanner,
    RandomSwiper,
  },
  data() {
    return {
      categorysArt: categoryObjectData,
    };
  },
  methods: {
    goProductsView(category) {
      this.$router.push({
        name: 'Products',
        params: {
          category,
        },
      });
    },
    scrollToHome(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo(0, top - 72); // 扣掉navbar高度
    },
  },
  mounted() {},
};
</script>
