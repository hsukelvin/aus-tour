<template>
  <SubscribeComponent />
  <footer class="text-white bg-footer">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 pt-5">
        <div class="col">
          <div class="text-center py-2">
            <router-link to="/"><span class="logo text-white fs-2">AusTour</span></router-link>
          </div>
        </div>
        <div class="col">
          <h3 class="text-center fw-bolder py-2">社群追蹤</h3>
          <div class="text-center pt-5 pb-5">
            <span class="text-white mx-4">
              <font-awesome-icon :icon="['fab', 'facebook']" class="fb fa-2x" />
            </span>
            <span class="text-white mx-4">
              <font-awesome-icon :icon="['fab', 'instagram']" class="ig fa-2x" />
            </span>
            <span class="text-white mx-4">
              <font-awesome-icon :icon="['fab', 'github']" class="git fa-2x" />
            </span>
          </div>
        </div>
        <div class="col">
          <h3 class="text-center fw-bolder py-2">聯絡我們</h3>
          <div class="d-flex justify-content-center">
            <div class="d-flex flex-column">
              <span class="py-2">
                <font-awesome-icon :icon="['fas', 'house']" class="px-3" />
                桃園市桃園區大興西路
              </span>
              <span class="py-2">
                <font-awesome-icon :icon="['fas', 'envelope']" class="px-3" />
                austour000@gmail.com
              </span>
              <span class="py-2">
                <font-awesome-icon :icon="['fas', 'phone']" class="px-3" />
                +886 908080777
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-lg-3 border-top text-center mt-5 py-3">
        <div class="my-2">
          <a href="#" class="text-white">
            <font-awesome-icon :icon="['fas', 'user-gear']" class="px-2" />
            管理員登入
          </a>
        </div>
        <p class="my-2">
          Copyright &copy;2022 All Rights Reserved by : <span class="fw-bolder">Kelvin Hsu</span>
        </p>
        <p class="my-2">
          本網站僅供個人練習使用，無商業行為
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import SubscribeComponent from '@/components/SubscribeComponent.vue';

export default {
  components: {
    SubscribeComponent,
  },
};
</script>
