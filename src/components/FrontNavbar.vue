<template>
  <Loading :active="isLoading" />
  <nav class="custom-nav navbar fixed-top navbar-expand-lg navbar-dark" ref="nav">
    <div class="container-lg">
      <router-link
        class="navbar-brand me-auto d-flex align-items-center"
        to="/" @click="emitRoutePath"
      >
        <img
          class="img-fluid"
          src="../assets/logo_kangaroo.png"
          alt="logo_img" style="width: 40px;"
        >
        <h1
          class="logo text-white fs-2 mb-0 px-2"
          v-if="innerWidth"
        >
          AusTour
        </h1>
      </router-link>

      <div class="navbar-nav d-flex flex-row order-lg-2">
        <router-link to="/favorite" class="nav-link p-0">
          <div class="p-3">
            <div class="position-relative">
              <span class="
                  custom-badge
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                " v-if="favoriteLength">
                {{ favoriteLength }}
              </span>
              <font-awesome-icon :icon="['fas', 'heart']" />
            </div>
          </div>
        </router-link>
        <router-link to="/cart" class="nav-link p-0">
          <div class="p-3">
            <div class="position-relative">
              <span class="
                  custom-badge
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                " v-if="cartsLength">
                {{ cartsLength }}
              </span>
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </div>
          </div>
        </router-link>
      </div>

      <button
        class="navbar-toggler order-lg-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref="buger-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end order-lg-1" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/products" @click="emitRoutePath">
              景點列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/about" @click="emitRoutePath">
              關於我們
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link px-3" to="" @click="emitRoutePath">
              訂單查詢
            </router-link>
          </li> -->
          <!-- <li class="nav-item">
            <router-link class="nav-link px-3" to="" @click="emitRoutePath">
              旅遊文章
            </router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      cartsLength: 0,
      favoriteLength: 0,
      innerWidth: true,
    };
  },
  inject: ['mitt'],
  props: ['favoritesArray'],
  watch: {
    favoritesArray: {
      handler() {
        this.favoriteLength = this.favoritesArray.length;
      },
      deep: true,
    },
  },
  methods: {
    getCartLength() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.isLoading = false;
          const { carts } = res.data.data;
          this.cartsLength = carts.length;
        });
    },
    emitRoutePath(e) {
      this.mitt.emit('getRoutePath', e.target.textContent);
    },
    scrollToggle() {
      if (window.pageYOffset > 100) {
        this.$refs.nav.classList.add('bg-primary', 'shadow');
      } else {
        this.$refs.nav.classList.remove('bg-primary', 'shadow');
      }
    },
    resizeToggle() {
      if (window.innerWidth <= 520) {
        this.innerWidth = false;
      } else {
        this.innerWidth = true;
      }
    },
  },
  created() {},
  mounted() {
    window.addEventListener('scroll', this.scrollToggle);
    window.addEventListener('resize', this.resizeToggle);
    this.$refs.nav.addEventListener('click', (e) => {
      if (e.target.nodeName !== 'A') return;
      if (window.innerWidth <= 991) {
        this.$refs['buger-menu'].click();
      }
    });

    this.getCartLength();
    this.mitt.on('getCartLength', () => {
      console.log('getCartLength');
      this.getCartLength();
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollToggle);
    window.removeEventListener('onresize', this.resizeToggle);
    this.mitt.off('getCartLength');
  },
};
</script>
