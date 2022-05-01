<template>
  <div class="custom-toast toast-container">
    <div
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-for="(msg, i) in messages" :key="i"
      :class="`toast${i}`"
    >
      <div class="toast-header">
        <span class="rounded me-2 p-2" :class="`bg-${msg.style}`"></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button type="button" class="btn-close" aria-label="Close" @click="closeToast(i)"></button>
      </div>
      <div class="toast-body" v-if="msg.content">{{ msg.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        // {
        //   style: 'success',
        //   title: '標題',
        //   content: '內容'
        // }
      ],
    };
  },
  inject: ['mitt'],
  methods: {
    showToast(msgObj) {
      this.messages.push(msgObj);
    },
    hideToast() {
      // 讓在陣列中的資料3秒後消失
      setTimeout(() => {
        this.messages.shift();
      }, 3000);
    },
    closeToast(index) {
      this.messages.splice(index, 1);
    },
  },
  mounted() {
    this.mitt.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      const msgObj = { style, title, content };
      this.showToast(msgObj);
      this.hideToast();
    });
  },
};
</script>
