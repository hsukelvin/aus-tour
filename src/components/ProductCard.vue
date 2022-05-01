<template>
  <div class="custom-card card w-100 h-100" style="width: 18rem">
    <div class="custom-img">
      <img
        :src="product.imageUrl"
        class="card-img-top cover-fit"
        alt="rot1"
      />
      <span class="custom-text d-flex justify-content-center align-items-center text-white">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="px-1" />
          查看更多
      </span>
      <font-awesome-icon
        :icon="['fa', 'heart']"
        class="collect fs-4 text-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement="buttom"
        title="取消收藏"
        v-if="isIdEqual"
        @click.prevent="toggleFavorite"
      />
      <font-awesome-icon
        :icon="['far', 'heart']"
        class="collect fs-4 text-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement="buttom"
        title="加入收藏"
        v-else
        @click.prevent="toggleFavorite"
      />
    </div>

    <div class="card-body p-3">
      <h5 class="card-title fw-bolder">{{ product.title }}</h5>
      <p class="card-text" style="height: 1.5rem; overflow: hidden">{{ product.content }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-gray text-decoration-line-through">
          NT$ {{ currency(product.origin_price) }}/人
        </p>
        <p class="fs-5 fw-bolder">NT$ {{ currency(product.price) }}/人</p>
      </div>
      <div class="text-center m-auto">
        <a href="#" class="btn btn-primary" @click.prevent="emitAddToCart">
          <font-awesome-icon :icon="['fas', 'cart-plus']" class="px-1" />
            加入購物車
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    };
  },
  inject: ['currency'],
  props: ['product'],
  computed: {
    isIdEqual() {
      return this.favorites.includes(this.product.id);
    },
  },
  methods: {
    emitAddToCart() {
      this.$emit('add-to-cart', this.product.id);
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.product);
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    },
  },
  mounted() {},
};
</script>
