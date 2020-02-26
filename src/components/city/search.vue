<template>
  <div>
    <div class="search">
      <input v-model="keyword"
             class="search-input"
             type="text"
             placeholder="输入城市名或拼音">
    </div>
    <div v-show="keyword"
         ref="search"
         class="search-content">
      <ul>
        <li v-for="item of list"
            :key="item.id"
            class="search-item border-bottom"
            @click="handleCityClick(item.name)">
          {{ item.name }}
        </li>
        <li v-show="hasNoData"
            class="search-item border-bottom">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import { mapMutations } from 'vuex';
import handleClickMixin from '~/common/mixins';

export default {
  name: 'CitySearch',
  mixins: [handleClickMixin],
  props: {
    cities: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = [];
        Object.keys(this.cities).forEach((item) => {
          this.cities[item].forEach((value) => {
            if (value.spell.slice(0, 4).includes(this.keyword)
              || value.name.slice(0, 4).includes(this.keyword)) {
              result.push(value)
            }
          })
        })
        this.list = result
      }, 100)
    }
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.search, {
        click: true // BetterScroll 默认会阻止浏览器的原生 click 事件
      });
    }, 20);
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
      this.keyword = ''
    },
    ...mapMutations(['changeCity'])
  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.search
  height 0.72rem
  padding 0 0.1rem
  background $bgColor

  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    padding 0 0.1rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666

.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee

  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    background #fff
    color #666
</style>
