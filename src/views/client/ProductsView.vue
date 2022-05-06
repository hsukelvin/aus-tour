<template>
  <FrontBanner />
  <BreadCrumb />

  <Loading :active="isLoading" />
  <section class="mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 px-3">
          <div class="list-group text-center">
            <button
              type="button"
              class="list-group-item list-group-item-action fw-bolder py-3 fs-5"
              aria-current="true"
              @click="filterCategory('全部')"
              :class="{ active: category === '全部' }"
            >
              {{ `全部 (${categorysTotal})` }}
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action fw-bolder py-3 fs-5"
              v-for="(item, i) in Object.keys(this.categorys)" :key="i"
              @click="filterCategory(item)"
              :class="{ active: category === item }"
            >
              {{ `${item} (${categorys[item]})` }}
            </button>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div class="col-12 px-3 mt-3 mt-md-3 mt-lg-0 mb-lg-4">
              <div
                class="rounded"
                :style="`
                  width: 100%;
                  height: 200px;
                  background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),
                  url(${categorysArt[category].img});
                  background-size: cover;
                  background-position: center;
                `"
              >
                <h2 class="text-white fw-bolder fs-1 pt-4 ps-4">{{ category }}</h2>
                <p class="text-white fw-bolder fs-5 px-4">{{ categorysArt[category].describe }}</p>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-2 row-cols-xl-3">
            <div
              class="col px-3 mt-3 mt-md-3 mt-lg-0 mb-lg-4"
              v-for="item in products"
              :key="item.id"
            >
              <RouterLink
                class="d-flex
                justify-content-center
                align-items-stretch
                text-decoration-none
                h-100"
                :to="`/product/${item.id}`"
              >
                <ProductCard
                  :product="item"
                  @add-to-cart="addToCart"
                  @toggle-favorite="toggleFavorite"
                />
              </RouterLink>
            </div>
          </div>

          <div class="row row-cols-1">
            <div class="col">
              <PaginationComponent :pagi-obj="pagination" @update-page="getProducts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FrontBanner from '@/components/FrontBanner.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import ProductCard from '@/components/ProductCard.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import showToastMsg from '@/func/showToastMsg';
import categoryObjectData from '@/data/categoryObjectData';

export default {
  components: {
    FrontBanner,
    BreadCrumb,
    ProductCard,
    PaginationComponent,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      categorysArt: categoryObjectData,
      categorys: {},
      category: '全部',
    };
  },
  inject: ['mitt'],
  computed: {
    // 計算 categorys 所有全部分類加總
    categorysTotal: {
      get() {
        let total = 0;
        Object.values(this.categorys).forEach((item) => {
          total += item;
        });
        return total;
      },
    },
  },
  methods: {
    getCategory() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.isLoading = false;
          const { products } = res.data;
          const unSort = products.reverse().map((item) => item.category);

          unSort.forEach((item) => {
            if (!Object.keys(this.categorys).includes(item)) {
              this.categorys[item] = 1;
            } else {
              this.categorys[item] += 1;
            }
          });
        });
    },
    filterCategory(category) {
      this.category = category;
      this.getProducts();
    },
    getProducts(page = 1) {
      this.isLoading = true;
      const apiPath = this.category === '全部' ? `?page=${page}` : `?page=${page}&category=${this.category}`;

      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products${apiPath}`)
        .then((res) => {
          this.isLoading = false;
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
        });
    },
    // 加入購物車
    addToCart(id, quantity = 1) {
      this.isLoading = true;
      const para = {
        data: {
          product_id: id,
          qty: quantity,
        },
      };
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, para)
        .then((res) => {
          this.isLoading = false;
          // 更新購物車 icon 數量
          this.mitt.emit('getCartLength');
          // Show ToastMessages
          const { message, success } = res.data;
          const { title } = res.data.data.product;
          showToastMsg(success, `${title} ${message}`);
        })
        .catch((err) => {
          const { message, success } = err.response.data;
          showToastMsg(success, message);
        });
    },
    toggleFavorite(product) {
      this.mitt.emit('toggleFavorite', product);
    },
  },
  mounted() {
    if (this.$route.params.category !== undefined) {
      this.category = this.$route.params.category;
    }
    this.getCategory();
    this.getProducts();
  },
};
</script>
