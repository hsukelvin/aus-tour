<template>
  <FrontBanner />
  <BreadCrumb />

  <div class="container mb-5">
    <div class="row flex-row-reverse">
      <div
        class="col-12 col-md-6 d-flex flex-column justify-content-center p-4"
        data-aos="zoom-in" data-aos-duration="1000"
      >
        <h2 class="text-center fw-bolder mb-3">我們的故事</h2>
        <p class="text-start px-4 mb-0">
          我們是一群熱愛澳洲旅行的團隊，因5年前到澳洲打工度假體驗不同文化的生活而愛上這裡，
          而決定待在澳洲生活，工作之餘我們喜歡開車到處去放鬆身心，久而久之我們對澳洲越來越熟悉，
          而進一步創立了澳洲景點帶人暢遊的服務。
        </p>
      </div>
      <div class="col-12 col-md-6 p-4" data-aos="zoom-in" data-aos-duration="2000">
        <img class="img-fluid" src="../../assets/about_1.jpg" alt="about_img">
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-6 d-flex flex-column justify-content-center p-4"
        data-aos="zoom-in" data-aos-duration="1000"
      >
        <h2 class="text-center fw-bolder mb-3">服務簡介</h2>
        <p class="text-start px-4 mb-0">
          我們屬於開車帶小團體(不超過10人)遊客去想去的景點並介紹解說給他們了解澳洲各景點的文化由來，
          比較一般旅行團品質較高，且大不相同，所以您可以放心地讓我們為您服務，保證滿意，
          在未來將會提供更多元的旅遊行程。
        </p>
      </div>
      <div class="col-12 col-md-6 p-4" data-aos="zoom-in" data-aos-duration="2000">
        <img class="img-fluid" src="../../assets/about_2.jpg" alt="about_img">
      </div>
    </div>
  </div>
</template>

<script>
import FrontBanner from '@/components/FrontBanner.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  components: {
    FrontBanner,
    BreadCrumb,
  },
};
</script>
