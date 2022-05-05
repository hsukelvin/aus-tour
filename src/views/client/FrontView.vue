<template>
  <FrontNavbar :favorites-array="favorites" />
  <main>
    <router-view />
  </main>
  <FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import showToastMsg from '@/func/showToastMsg';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
  inject: ['mitt'],
  data() {
    return {
      favorites: [],
    };
  },
  methods: {},
  mounted() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    this.mitt.on('toggleFavorite', (product) => {
      const favoriteIndex = this.favorites.findIndex((item) => item === product.id);
      const { title } = product;

      if (favoriteIndex === -1) {
        this.favorites.push(product.id);
        // Show ToastMessages
        showToastMsg(true, `已將 ${title} 加入收藏`);
      } else {
        this.favorites.splice(favoriteIndex, 1);
        // Show ToastMessages
        showToastMsg(true, `已將 ${title} 移除收藏`);
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    });
  },
  beforeUnmount() {
    this.mitt.off('toggleFavorite');
  },
};
</script>
