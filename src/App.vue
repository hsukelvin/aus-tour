<template>
  <ToastMessages />
  <router-view />
  <GoTop />
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';
import GoTop from '@/components/GoTop.vue';
import mitt from '@/libs/emitter';
import { currency, timeConvert } from '@/func/filters';

export default {
  components: {
    ToastMessages,
    GoTop,
  },
  provide() {
    return {
      mitt,
      currency,
      timeConvert,
    };
  },
};
</script>

<style lang="scss">
// @import '@/assets/stylesheets/all.scss';
// @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
</style>
