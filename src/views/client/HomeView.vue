<template>
  <FrontBanner @scroll-to-home="scrollToHome" />
  <div class="" ref="home">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center fw-bolder mb-4">選擇我們的好處</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-4 text-center p-0">
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
        <div class="col-12 col-lg-4 text-center p-0">
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
        <div class="col-12 col-lg-4 text-center p-0">
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
  </div>

  <div class="bg-light">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="fw-bolder">想去哪裡呢?</h2>
          <p>馬上前往選購想去的旅遊地區，從感興趣的地區尋找您的最愛吧！</p>
        </div>
      </div>
      <div class="row">
        <a
          href="#"
          class="custom-state col-md-6 col-lg-4 p-0"
          v-for="(item, i) in categorys"
          :key="i"
          @click.prevent="goProductsView(item.name)"
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
      </div>
    </div>
  </div>

  <div class="custom-arts">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <h2 class="text-white fw-bolder py-3">你所不知道的遠方，永遠都是值得一去</h2>
          <p class="text-white fw-bolder text-end fs-5 py-3">
            想要未知的瘋狂，想要聲色的張揚，想要最好的時光在最美地方
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center fw-bolder mb-4">更多景點選擇</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 px-0">
        <RandomSwiper />
      </div>
    </div>
  </div>

  <!-- <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>旅客心得好文</h2>
      </div>
    </div>
  </div> -->
</template>

<script>
import FrontBanner from '@/components/FrontBanner.vue';
import RandomSwiper from '@/components/RandomSwiper.vue';

export default {
  components: {
    FrontBanner,
    RandomSwiper,
  },
  data() {
    return {
      categorys: [
        {
          name: '北領地',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLmwmj2guSuOvnD44v2HMqV_z--1_iMaAm71vTq4l_ZXQw2zLQ0tbHjE5injf6t-M5bvUAggsl2ZO3b3Zvi7Uyug',
        },
        {
          name: '西澳大利亞州',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjT6622w0gxyGrk3qnwxSgKDG8Gk7KcbcxflSYGV_IOR0F1uVGjgvUf7O-9VSs__EsyIpYcUAgcQQ3i9Px5jRnJA',
        },
        {
          name: '昆士蘭州',
          img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKuEjUajwr_fh4llRc7aCvU90rRPF2cdLPtUHu3C9fr--6CZw1V808mpEFEKZaUwn5BHSSHBp36kkdGqXW18Zjpg',
        },
        {
          name: '南澳洲',
          img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTm1Y2AGO8N6XMiNZzX8CKUIpTTRcEtZgg8RsUZaDyIiVMM8We6Ncy1gjywJgK1ZT-m4Oh7XGiX1kxhppLdU2rTOQ',
        },
        {
          name: '新南威爾斯州',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTS2HY-DmnpAFeWGLpnfPEcEWLmGwHQe7606v7ygVEMFdpRz5iEPW_5GDhBGc-GssDflEhjNFnjOnP0fkPYUcrZfg',
        },
        {
          name: '塔斯馬尼亞州',
          img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKFZ7Xw-e30JmDGAYi3hiGrevMa3jubrBtNEB8zYKStNFk832ixGhYteo5x5LowCSMaKH6JyZZIs6GqnrCJn99aQ',
        },
      ],
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
      // console.log(this.$refs);
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo(0, top - 72); // 扣掉navbar高度
      console.log(top);
    },
  },
  mounted() {},
};
</script>
