<template>
  <FrontBanner />
  <BreadCrumb />

  <Loading :active="isLoading" />
  <div class="container mb-5">
    <template v-if="favoriteProducts.length">
      <ul class="list-group">
        <li
          class="custom-favo list-group-item border-0 shadow p-2 mb-3"
          v-for="(item, i) in favoriteProducts"
          :key="i"
        >
          <span>
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="btn btn-primary text-white fs-3 remove-favo"
              @click="deleteProduct(item)"
            />
          </span>
          <div class="row">
            <div class="col-md-3 col-lg-2">
              <div
                :style="`
                width: 100%;
                height: 120px;
                background-size: cover;
                background-position: center center;
                background-image: url(${item.imageUrl});
              `"
              ></div>
            </div>
            <div
              class="
                col-md-9 col-lg-10
                mt-2 mt-md-0
                d-flex
                align-items-center
              "
            >
              <div class="row flex-fill align-items-center">
                <div class="col-sm-6 col-lg-4">
                  <h5 class="text-center fw-bold m-0 px-2 py-2">
                    {{ item.title }}
                  </h5>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <p class="text-center m-0 px-2 py-2">
                    NT$ {{ currency(item.price) }}/人
                  </p>
                </div>
                <div class="col-sm-12 col-lg-4 text-center py-2">
                  <router-link
                    class="btn btn-primary mx-2 mx-lg-3 px-3"
                    :to="`/product/${item.id}`"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'magnifying-glass']"
                      class="px-1"
                    />
                    查看更多
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="text-center">
        <div class="bg-light py-5 px-2 px-sm-5">
          <h2 class="mb-5 fw-bolder">尚未有景點加入收藏</h2>
          <router-link class="btn btn-primary fs-5 fw-bolder" to="/products">
            把喜歡的景點加入收藏吧 !
          </router-link>
        </div>
      </div>
    </template>
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
  data() {
    return {
      isLoading: false,
      favoriteProducts: [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    };
  },
  inject: ['mitt', 'currency'],
  methods: {
    getProducts() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.isLoading = false;
          const { products } = res.data;
          this.filterProducts(products);
        })
        .catch(() => {});
    },
    filterProducts(products) {
      this.favoriteProducts = products.filter((product) => this.favorites.includes(product.id));
    },
    deleteProduct(product) {
      const index = this.favoriteProducts.findIndex((item) => item.id === product.id);
      this.favoriteProducts.splice(index, 1);
      this.mitt.emit('toggleFavorite', product);
    },
  },
  created() {
    if (this.favorites.length !== 0) {
      this.getProducts();
    }
  },
};
</script>

<style lang="scss"></style>
