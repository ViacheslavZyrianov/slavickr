<template>
  <div
    class="loader-wrap"
    v-if="isLoaderVisible"
  >
  <div class="loader-circles">
    <div
      v-for="c in 10"
      :key="c"
      class="circle"
    />
  </div>
</div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    isLoaderVisible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .loader-wrap{
    position: fixed;
    left: 0;right: 0;top: 0;bottom: 0;
    margin: auto;
    overflow: hidden;
  }

  .loader-circles{
    $loader-size: 40px;
    $loader-color: #ffffff;
    $loader-speed: 12;

    position: absolute;
    left: 0;right: 0;top: 0;bottom: 0;
    margin: auto;
    transform: rotate(45deg);
    width: $loader-size*5;
    height: $loader-size*5;

    .circle{
      box-sizing: border-box;
      position: absolute;
      top: 0;bottom: 0;right: 0;left: 0;
      margin: auto;
      background-color: transparent;
      border: $loader-size/10 solid $loader-color;
      border-radius: 50%;
      border-bottom-color: transparent;
      border-right-color: transparent;
      text-align: center;

      &:nth-child(even){
        border-color: #1a1a1a;
        border-bottom-color: transparent;
        border-right-color: transparent;
      }

      &:nth-child(odd){
        border-color: #8a8a8a;
        border-bottom-color: transparent;
        border-right-color: transparent;
      }

      @for $i from 1 through 10 {
        &:nth-child(#{$i}){
          width: ($loader-size*$i)/2;
          height: ($loader-size*$i)/2;
          animation: rotate-circle linear infinite;
          animation-duration: $loader-speed/$i*1s;
        }
      }
    }

    @for $i from 0 through 9 {
      @keyframes rotate-circle{
        100%{
          transform: rotate(360deg);
        }
      }
    }
  }
</style>
