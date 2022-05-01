<template>
  <div class="row row-cols-1">
    <div class="col">
      <ul class="pagination justify-content-center py-3 mt-3 mt-lg-0 mb-0">
        <li class="page-item" :class="{ disabled: !pagiObj.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="emitPage(pagiObj.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="(num, index) in pagiObj.total_pages"
          :key="index"
          :class="{ active: num === pagiObj.current_page }"
        >
          <a class="page-link" href="#" @click.prevent="emitPage(num)">{{ num }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !pagiObj.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="emitPage(pagiObj.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['pagiObj'],
  emits: ['update-page'], // 無法正確追蹤建議加上 emits 選項
  methods: {
    emitPage(pageNum) {
      this.$emit('update-page', pageNum);
    },
  },
};
</script>
