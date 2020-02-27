<template>
  <div ref="wrapper"
       class="list">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{ currentCity }}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div v-for="item of hot"
               :key="item.id"
               class="button-wrapper"
               @click="handleCityClick(item.name)">
            <div class="button">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div v-for="(item, key) of cities"
           :key="key"
           :ref="key"
           class="area">
        <div class="title border-topbottom">
          {{ key }}
        </div>
        <div class="item-list">
          <div v-for="innerItem of item"
               :key="innerItem.id"
               class="item border-bottom"
               @click="handleCityClick(innerItem.name)">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BScroll from '@better-scroll/core';
import handleClickMixin from '~/common/mixins';

export default {
  name: 'CityList',
  mixins: [handleClickMixin],
  props: {
    hot: {
      type: Array,
      default: () => []
    },
    cities: {
      type: Object,
      default: () => { }
    },
    letter: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      currentCity: 'city'
    })
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
    cities() {
      this.$nextTick(() => {
        // 重新计算content高度
        this.scroll.refresh();
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true // BetterScroll 默认会阻止浏览器的原生 click 事件
      });
    });
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.border-topbottom
  &:before
    border-color #ccc

  &:after
    border-color #ccc

.border-bottom
  &:before
    border-color #ccc

.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  height 100%

  .title
    line-height 0.54rem
    background #eee
    padding-left 0.2rem
    color #666
    font-size 0.26rem

  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem

    .button-wrapper
      float left
      width 33.33%

      .button
        margin 0.1rem
        padding 0.1rem 0
        text-align center
        border 0.02rem solid #ccc
        border-radius 0.06rem

  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>
