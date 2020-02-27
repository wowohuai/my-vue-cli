<template>
  <ul class="list">
    <li v-for="item of letters"
        :key="item"
        :ref="item"
        class="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove.prevent="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
      {{ item }}
    </li>
  </ul>
</template>

<script>
const A = 'A';
const HEAD_HEIGHT = 79;
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters() {
      const letters = []
      Object.keys(this.cities).forEach((item) => {
        letters.push(item);
      })
      return letters
    }
  },
  updated() {
    console.log(this.$refs[A][0]);
    this.startY = this.$refs[A][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - HEAD_HEIGHT;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  border yellow 1px solid

  .item
    line-height 0.4rem
    text-align center
    color $bgColor
    border red 1px solid
</style>
