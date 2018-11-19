<template>
  <section class="images">
    <ul class="image-list">
      <img
        v-for="image in imageList"
        :key="image.id"
        :src="imageUrl(image)"
        :alt="image.title"
        class="image-list__item"
      >
    </ul>
  </section>
</template>

<script>
export default {
  name: 'images',
  props: {
    imageList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    imageUrl ({ farm, server, id, secret }) {
      return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/breakpoint';

  .image-list {
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    &__item {
      $imageMargin: 8px;

      width: calc(20% - (#{$imageMargin} * 2));
      height: auto;
      margin: $imageMargin;

      @include breakpoint(tablet) {
        width: calc(33% - (#{$imageMargin} * 2));
      }

      @include breakpoint(mobile) {
        width: calc(100% - (#{$imageMargin} * 2));
      }
    }
  }
</style>
