<template>
  <div class="wrapper">
    <swiper v-if="showSwiper"
            :options="swiperOption">
      <swiper-slide v-for="item of swiperList"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl">
      </swiper-slide>
      <div slot="pagination"
           class="swiper-pagination" />
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.swiperList.length > 0;
    }
  }
}

</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff

.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eee

  .swiper-img
    width 100%
</style>
