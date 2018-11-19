<template>
  <section class="image-filter">
    <h2>Type in to search for images</h2>
    <input
      type="text"
      class="image-filter__input"
      placeholder="Search here..."
      v-model="text"
    >
    <button
      class="image-filter__button"
      :disabled="isBtnSearchImagesDisabled"
      @click="onSearchImages"
    >
      Search
    </button>
  </section>
</template>

<script>
export default {
  name: 'imageFilter',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    isBtnSearchImagesDisabled () {
      return this.text.length === 0
    }
  },
  methods: {
    onSearchImages () {
      this.$emit('fetchImageData', {
        text: this.text,
        page: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-filter {
    margin-bottom: auto;
  }
</style>
