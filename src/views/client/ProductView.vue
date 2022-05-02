<template>
  <FrontBanner />
  <BreadCrumb :product-title="product.title" />

  <div class="container-lg mb-5">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 px-2 px-md-4 mb-5 mb-md-0">
        <div class="row row-cols-1">
          <div class="col">
            <img :src="mainImg" alt="顯示產品圖片" class="img-fluid bg-cover" />
          </div>
        </div>
        <div class="product-sub-img row row-cols-4 p-2">
          <a
            class="px-1"
            :class="{ active: mainImg === product.imageUrl }"
            href="#"
            @click.prevent="updateImg(product.imageUrl)"
          >
            <img :src="product.imageUrl" alt="產品圖片" class="img-fluid" />
          </a>
          <a
            class="px-1"
            :class="{ active: mainImg === img }"
            href="#"
            v-for="(img, i) in product.imagesUrl"
            :key="i"
            @click.prevent="updateImg(img)"
          >
            <img :src="img" :alt="`產品圖片`" class="img-fluid" />
          </a>
        </div>
      </div>

      <div class="col-12 d-flex flex-column justify-content-between col-sm-6 px-2 px-md-4">
        <p class="badge bg-primary text-wrap fs-6 mb-2" style="width: 8rem">
          {{ product.category }}
        </p>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <h2 class="h2 fw-bolder mb-0">{{ product.title }}</h2>
          <span class="px-1" style="cursor: pointer;">
            <font-awesome-icon
              :icon="['fa', 'heart']"
              class="fs-4 text-secondary"
              data-bs-toggle="tooltip"
              data-bs-placement="buttom"
              title="取消收藏"
              v-if="isIdEqual"
              @click.prevent="toggleFavorite"
            />
            <font-awesome-icon
              :icon="['far', 'heart']"
              class="fs-4 text-secondary"
              data-bs-toggle="tooltip"
              data-bs-placement="buttom"
              title="加入收藏"
              v-else
              @click.prevent="toggleFavorite"
            />
          </span>
        </div>
        <p class="fw-bolder mb-2">{{ product.content }}</p>
        <p class="border-start border-4 border-primary ps-3 mb-3">
          {{ product.description }}
        </p>
        <p
          class="d-flex align-items-center"
          v-if="product.include_ticket"
        >
          <font-awesome-icon
            :icon="['fa', 'ticket']"
            class="text-primary fs-4 px-2"
          />包含所有門票
        </p>
        <p class="d-flex align-items-center" v-if="product.is_pickup">
          <font-awesome-icon
            :icon="['fa', 'bus']"
            class="text-primary fs-4 px-2"
          />提供飯店接送
        </p>
        <p class="d-flex align-items-center" v-if="product.spendTime">
          <font-awesome-icon
            :icon="['far', 'clock']"
            class="text-primary fs-4 px-2"
          />行程時間 {{ product.spendTime }} 小時
        </p>
        <div class="d-flex justify-content-between mb-2">
          <span class="text-decoration-line-through text-gray"
            >原價NT$ {{ currency(product.origin_price) }}/人</span
          >
          <span class="fs-5 fw-bolder">現在只要NT$ {{ currency(product.price) }}/人</span>
        </div>
        <div class="d-flex align-items-center">
          <div
            class="d-flex align-items-center flex-fill me-1"
            :style="{ cursor: quantity === 1 ? 'not-allowed' : 'pointer' }"
          >
            <button
              class="btn btn-primary"
              :disabled="quantity === 1"
              @click="quantity--"
            >
              -
            </button>
            <label for="qty" class="flex-fill">
              <input
                type="number"
                id="qty"
                class="form-control text-center"
                min="1"
                max="99"
                v-model.number="quantity"
              />
            </label>
            <button class="btn btn-primary" @click="quantity++">+</button>
          </div>
          <button class="btn btn-primary flex-fill ms-1" @click="addToCart">
            <font-awesome-icon :icon="['fas', 'cart-plus']" class="px-1" />
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <h2 class="text-start fw-bolder mb-4">其它景點選擇</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 px-0">
        <RandomSwiper />
      </div>
    </div>
  </div>
</template>

<script>
import FrontBanner from '@/components/FrontBanner.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import RandomSwiper from '@/components/RandomSwiper.vue';
import showToastMsg from '@/func/showToastMsg';

export default {
  components: {
    FrontBanner,
    BreadCrumb,
    RandomSwiper,
  },
  data() {
    return {
      product: {},
      mainImg: '',
      quantity: 1,
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    };
  },
  inject: ['mitt', 'currency'],
  watch: {
    quantity() {
      if (this.quantity <= 0) {
        this.quantity = 1;
      }
    },
    $route() {
      if (this.$route.params.id !== undefined) {
        this.getProduct();
      }
    },
  },
  computed: {
    isIdEqual() {
      return this.favorites.includes(this.product.id);
    },
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;

      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          const { product } = res.data;
          this.product = product;
          this.mainImg = this.product.imageUrl;
          console.log(this.product);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateImg(img) {
      this.mainImg = img;
    },
    toggleFavorite() {
      this.mitt.emit('toggleFavorite', this.product);
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    },
    addToCart() {
      console.log(this.product.id, this.quantity);
      const para = {
        data: {
          product_id: this.product.id,
          qty: this.quantity,
        },
      };
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, para)
        .then((res) => {
          // console.log(res);
          // 更新購物車 icon 數量
          this.mitt.emit('getCartLength');
          // Show ToastMessages
          const { message, success } = res.data;
          const { title } = res.data.data.product;
          showToastMsg(success, `${title} ${message}`);
          // 數量初始化
          this.quantity = 1;
        })
        .catch((err) => {
          const { message, success } = err.response.data;
          showToastMsg(success, message);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
