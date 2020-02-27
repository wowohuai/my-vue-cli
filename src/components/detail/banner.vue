<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img :src="bannerImg"
           class="banner-img">
      <div class="banner-info">
        <div class="banner-tittle">
          {{ sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <gallary v-show="showGallary"
               :imgs="bannerImgs"
               @close="handleGallaryClose" />
    </fade-animation>
  </div>
</template>

<script>
import FadeAnimation from '~/common/fade-animation.vue'
import Gallary from '~/common/gallary.vue'

export default {
  name: 'DetailBanner',
  components: {
    FadeAnimation,
    Gallary
  },
  props: {
    sightName: {
      type: String,
      default: ''
    },
    bannerImg: {
      type: String,
      default: ''
    },
    bannerImgs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%

  .banner-img
    width 100%

  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(to, top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

    .banner-tittle
      flex 1
      font-size 0.32rem
      padding 0 0.2rem

    .banner-number
      height 0.32rem
      line-height 0.32rem
      margin-top 0.14rem
      padding 0 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem

      .banner-icon
        font-size 0.24rem
</style>
