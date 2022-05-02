<template>
  <FrontBanner />
  <BreadCrumb />

  <Loading :active="isLoading" />
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 col-lg-3 px-3">
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
      <div class="col-12 col-lg-9">
        <div class="row">
          <div class="col-12 px-3 mt-3 mt-md-3 mt-lg-0 mb-lg-4">
            <div
              class="rounded"
              :style="`
                width: 100%;
                height: 200px;
                background-image: url(${categorysArt[category].img});
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
</template>

<script>
import FrontBanner from '@/components/FrontBanner.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import ProductCard from '@/components/ProductCard.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import showToastMsg from '@/func/showToastMsg';

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
      categorysArt: {
        全部: {
          describe: '雪梨和墨爾本的大都會文化、澳洲內陸的奇形異石和大堡礁。',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAGvTVTngAE2cmM-mivReU_I9EpLZU5w3Zm2BC5ouZLq1fOA-QkG503X4XGUeQzsYW8jiDG6IirMhg3CKRdvZPA',
        },
        北領地: {
          describe: '有艾爾斯岩、愛麗絲泉和達爾文鎮等內陸沙漠知名景點的澳洲屬地。',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLmwmj2guSuOvnD44v2HMqV_z--1_iMaAm71vTq4l_ZXQw2zLQ0tbHjE5injf6t-M5bvUAggsl2ZO3b3Zvi7Uyug',
        },
        西澳大利亞州: {
          describe: '位於澳洲西部的地區。景點包含河濱首府伯斯、瑪格麗特河畔的釀酒廠和內陸。',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjT6622w0gxyGrk3qnwxSgKDG8Gk7KcbcxflSYGV_IOR0F1uVGjgvUf7O-9VSs__EsyIpYcUAgcQQ3i9Px5jRnJA',
        },
        昆士蘭州: {
          describe: '澳洲省份，擁有大堡礁和熱帶雨林，為布里斯本和內陸的所在地。',
          img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKuEjUajwr_fh4llRc7aCvU90rRPF2cdLPtUHu3C9fr--6CZw1V808mpEFEKZaUwn5BHSSHBp36kkdGqXW18Zjpg',
        },
        塔斯馬尼亞州: {
          describe: '地勢崎嶇的島嶼。塔斯馬尼亞荒原、首府荷巴特，和十九世紀監獄「亞瑟港」的所在地。',
          img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKFZ7Xw-e30JmDGAYi3hiGrevMa3jubrBtNEB8zYKStNFk832ixGhYteo5x5LowCSMaKH6JyZZIs6GqnrCJn99aQ',
        },
        南澳洲: {
          describe: '澳洲的一州。特色包含葡萄酒產區、野生動植物、阿得雷德市區教堂和乾燥內陸。',
          img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTm1Y2AGO8N6XMiNZzX8CKUIpTTRcEtZgg8RsUZaDyIiVMM8We6Ncy1gjywJgK1ZT-m4Oh7XGiX1kxhppLdU2rTOQ',
        },
        新南威爾斯州: {
          describe: '澳洲的一州。範圍涵蓋海濱城市雪梨、山脈、海灘和乾燥內陸。',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTS2HY-DmnpAFeWGLpnfPEcEWLmGwHQe7606v7ygVEMFdpRz5iEPW_5GDhBGc-GssDflEhjNFnjOnP0fkPYUcrZfg',
        },
      },
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
      // console.log(id, quantity);
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
          // console.log(res);
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
    deleteFavorite() {},
  },
  mounted() {
    if (this.$route.params.category !== undefined) {
      this.category = this.$route.params.category;
    }
    console.log(this.category);
    this.getCategory();
    this.getProducts();
  },
};
</script>
