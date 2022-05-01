<template>
  <div class="bg-light mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb my-4">
              <li class="breadcrumb-item"
                v-for="(item, i) in items"
                :key="i" :class="{ active: !!item.link }"
              >
                <template v-if="!!item.link">
                  <router-link :to="item.link">{{ item.name }}</router-link>
                </template>
                <template v-else>
                  {{ item.name }}
                </template>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  props: ['productTitle'],
  watch: {
    productTitle() {
      if (this.$route.meta.breadcrumb.length === 3) {
        this.$route.meta.breadcrumb.pop();
      }
      this.$route.meta.breadcrumb.push({ name: this.productTitle });
      this.getRoute();
    },
    $route() {
      this.getRoute();
    },
  },
  methods: {
    getRoute() {
      this.items = this.$route.meta.breadcrumb;
      // console.log(this.$route.meta);
    },
  },
  created() {
    // console.log(this.$route.params.id);
    if (this.$route.params.id === undefined) {
      this.getRoute();
    }
  },
  mounted() {},
};
</script>
