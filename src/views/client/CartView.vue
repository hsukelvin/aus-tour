<template>
  <FrontBanner />
  <BreadCrumb />

  <Loading :active="isLoading" />
  <div class="container mb-5">
    <template v-if="carts.length">
      <div class="row">
        <div class="col-12 d-flex p-2">
          <div class="flex-fill bg-light text-end p-2">
            <button class="btn btn-primary" @click="deleteCarts">清空購物車</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-2">
          <div class="table-responsive bg-light px-4 pt-4">
            <table class="table text-center align-middle m-0">
              <thead>
                <tr class="text-primary">
                  <th class="py-2 px-0" scope="col">圖片</th>
                  <th class="py-2 px-0" scope="col">名稱</th>
                  <th class="py-2 px-0" scope="col">數量</th>
                  <th class="py-2 px-0" scope="col">單價</th>
                  <th class="py-2 px-0" scope="col">小計</th>
                  <th class="py-2 px-0" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in carts" :key="item.id">
                  <td>
                    <div
                      class="m-auto"
                      :style="`
                        width: 6rem;
                        height: 5rem;
                        background-size: cover;
                        background-position: center center;
                        background-image: url(${item.product.imageUrl});
                      `"
                    ></div>
                  </td>
                  <td class="text-nowrap fw-bolder">{{ item.product.title }}</td>
                  <td>
                    <div class="text-nowrap">
                      <span :style="{ cursor: item.qty === 1 ? 'not-allowed' : 'pointer' }">
                        <font-awesome-icon
                          :icon="['fas', 'minus']"
                          class="text-primary px-3"
                          :style="{ 'pointer-events': item.qty === 1 ? 'none' : '' }"
                          :class="{ 'text-gray': item.qty === 1 ? true : false }"
                          @click="item.qty-- ,updateCart(item)"
                        />
                      </span>
                      <label for="qty">
                        <input
                          type="number"
                          id="qty"
                          class="form-control text-center"
                          style="width: 65px;"
                          min="1"
                          max="99"
                          v-model.number="item.qty"
                          disabled
                        />
                      </label>
                      <span style="cursor: pointer;">
                        <font-awesome-icon
                          :icon="['fas', 'plus']"
                          class="text-primary px-3"
                          @click="item.qty++ ,updateCart(item)"
                        />
                      </span>
                    </div>
                  </td>
                  <td class="text-nowrap">NT$ {{ currency(item.product.price) }}/人</td>
                  <td class="text-nowrap">NT$ {{ currency(item.total) }}</td>
                  <td>
                    <font-awesome-icon
                      type="button"
                      :icon="['far', 'trash-can']"
                      class="custom-trash"
                      @click="deleteCart(item.id)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-light text-end px-4 pb-4">
            <div class="border-bottom">
              <div class="fs-5 fw-bold p-2">總計 : NT$ {{ currency(total) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-2">
          <div class="bg-light d-flex p-2">
            <router-link class="btn btn-primary" to="/products">
              <font-awesome-icon
                type="button"
                :icon="['fas', 'arrow-left']"
                class="pe-2"
              />
              繼續選購
            </router-link>
            <router-link class="btn btn-primary ms-auto" to="/checkout/order">
              前往結帳
              <font-awesome-icon
                type="button"
                :icon="['fas', 'arrow-right']"
                class="ps-2"
              />
            </router-link>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <div class="col-12 text-center">
          <div class="bg-light py-5 px-2 px-sm-5">
            <h2 class="mb-5 fw-bolder">尚未有景點加入購物車</h2>
            <router-link class="btn btn-secondary fw-bolder fs-5" to="/products">
              把喜歡的景點加入購物車吧 !
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import FrontBanner from '@/components/FrontBanner.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import showToastMsg from '@/func/showToastMsg';

export default {
  components: {
    FrontBanner,
    BreadCrumb,
  },
  data() {
    return {
      isLoading: false,
      carts: [],
      finalTotal: 0,
      total: 0,
    };
  },
  inject: ['mitt', 'currency'],
  methods: {
    getCarts() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.isLoading = false;
          const { carts, total } = res.data.data;
          console.log(res);
          this.carts = carts;
          this.total = total;
          this.finalTotal = res.data.data.final_total;
          console.log(this.carts);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCart(product) {
      this.isLoading = true;
      console.log(product.qty);
      const { qty, id } = product;
      const para = {
        data: {
          product_id: product.product_id,
          qty,
        },
      };
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, para)
        .then((res) => {
          this.isLoading = false;
          console.log(res);
          const { message, success } = res.data;
          showToastMsg(success, message);
          this.getCarts();
        })
        .catch((err) => {
          console.dir(err.response.data);
          const { message, success } = err.response.data;
          showToastMsg(success, message);
        });
    },
    deleteCart(id) {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          this.isLoading = false;
          const { message, success } = res.data;
          showToastMsg(success, message);
          // 更新購物車 icon 數量
          this.mitt.emit('getCartLength');
          this.getCarts();
        })
        .catch((err) => {
          const { message, success } = err.response.data;
          showToastMsg(success, message);
        });
    },
    deleteCarts() {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          this.isLoading = false;
          const { message, success } = res.data;
          showToastMsg(success, message);
          // 更新購物車 icon 數量
          this.mitt.emit('getCartLength');
          this.getCarts();
        })
        .catch((err) => {
          const { message, success } = err.response.data;
          showToastMsg(success, message);
        });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
