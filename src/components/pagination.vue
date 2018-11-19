<template>
  <section class="pagination">
    <button
      @click="onShowFirstPage"
      :disabled="isShowPrevPageBtnDisabled"
    >
      First
    </button>
    <button
      @click="onShowPrevPage"
      :disabled="isShowPrevPageBtnDisabled"
    >
      Prev
    </button>
    <div class="currentPage">{{ currentPage }}</div>
    <div class="divider">&nbsp;of&nbsp;</div>
    <div class="totalPages">{{ totalPages }}</div>
    <button
      @click="onShowNextPage"
      :disabled="isShowNextPageBtnDisabled"
    >
      Next
    </button>
    <button
      @click="onShowLastPage"
      :disabled="isShowNextPageBtnDisabled"
    >
      Last
    </button>
  </section>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    }
  },
  methods: {
    onShowFirstPage () {
      this.$emit('fetchImageData', {
        page: 1
      })
    },
    onShowPrevPage () {
      this.$emit('fetchImageData', {
        page: this.currentPage - 1
      })
    },
    onShowNextPage () {
      this.$emit('fetchImageData', {
        page: this.currentPage + 1
      })
    },
    onShowLastPage () {
      this.$emit('fetchImageData', {
        page: this.totalPages
      })
    }
  },
  computed: {
    isShowPrevPageBtnDisabled () {
      return this.currentPage === 1
    },
    isShowNextPageBtnDisabled () {
      return this.currentPage === this.totalPages
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    margin: auto 0 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
