<template>
  <section class="custom-subscribe">
    <div class="container py-5">
      <div
        class="d-flex flex-column flex-lg-row align-items-lg-center align-items-sm-stretch"
      >
        <h3
          class="text-center text-white fw-bolder m-0 py-3 px-4"
        >
          訂閱我們即可收到更多旅遊景點資訊 !
        </h3>
        <Form
          class="flex-fill py-3 px-4"
          ref="subscribe"
          v-slot="{ errors }" @submit="subscribeUs"
        >
          <div
            class="input-group"
            :style="{
              cursor: Object.keys(errors).length !== 0 || subscribe.email === '' ?
              'not-allowed' :
              'pointer'
            }"
          >
            <Field
              type="email"
              name="email"
              placeholder="請輸入Email訂閱我們"
              id="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              rules="email"
              v-model="subscribe.email"
            />
            <button
              type="submit"
              class="btn btn-primary px-md-5 py-2"
              :disabled="
                Object.keys(errors).length !== 0 || subscribe.email === '' ? true : false
              "
            >
              訂閱
            </button>
          </div>
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
import showToastMsg from '@/func/showToastMsg';

export default {
  data() {
    return {
      subscribe: { email: '' },
    };
  },
  inject: ['mitt'],
  methods: {
    subscribeUs() {
      this.$refs.subscribe.resetForm();
      this.subscribe.email = '';
      showToastMsg(true, '訂閱成功，後續將會收到最新的旅遊行程資訊!');
    },
  },
};
</script>
