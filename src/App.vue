<template>
  <div id="app" class="slavickr">
    <h1>Welcome to Slavickr!</h1>
    <image-filter
      @fetchImageData='fetchImageData'
    />
    <images
      v-if="!isLoaderVisible"
      :imageList="imageList"
    />
    <loader
      v-else
      :isLoaderVisible="isLoaderVisible"
    />
    <pagination
      v-if="imageList"
      @fetchImageData='fetchImageData'
      :currentPage="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>

<script>
import imageFilter from './components/imageFilter'
import images from './components/images'
import pagination from './components/pagination'

import requestUrlFormatter from '@/utils/requestUrlFormatter'

export default {
  name: 'slavickr',
  data () {
    return {
      params: {
        api_key: 'ca8c168dde0e11d7ff135a21364e043e',
        method: 'flickr.photos.search',
        text: '',
        format: 'json',
        sort: 'relevance',
        content_type: 1,
        media: 'photos',
        page: 1,
        per_page: 10
      },
      isLoaderVisible: false,
      imageList: null,
      currentPage: 1,
      totalPages: 1
    }
  },
  components: {
    imageFilter,
    images,
    pagination
  },
  computed: {
    requestURL () {
      return `https://api.flickr.com/services/rest/?${requestUrlFormatter(this.params)}&nojsoncallback=1`
    }
  },
  methods: {
    fetchImageData ({ text = this.params.text, page = 1 }) {
      this.params.page = page
      this.params.text = text
      this.isLoaderVisible = true
      fetch(this.requestURL)
        .then(response => response.json())
        .then(imageData => {
          this.imageList = imageData.photos.photo
          this.currentPage = imageData.photos.page
          this.totalPages = imageData.photos.pages
          this.isLoaderVisible = false
        })
        .catch(err => {
          this.isLoaderVisible = false
          throw err
        })
    }
  }
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  html, body, .slavickr {
    height: 100%;
  }

  body {
    margin: 0;
  }

  ul {
    padding: 0;
  }

  button {
    cursor: pointer;
    margin: 4px;
    background-color: #fff;

    &:disabled {
      background-color: rgb(192, 192, 192);
      cursor: not-allowed;
    }
  }

  .slavickr {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url('assets/bg-texture.png');
  }
</style>
