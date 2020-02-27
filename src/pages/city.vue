<template>
  <transition name="fade"
              tag="div">
    <div>
      <city-header />
      <city-search :cities="cities" />
      <city-list :cities="cities"
                 :hot="hotCities"
                 :letter="letter" />
      <city-alphabet :cities="cities"
                     @change="change" />
    </div>
  </transition>
</template>

<script>
import CityHeader from 'components/city/header';
import CitySearch from 'components/city/search';
import CityList from 'components/city/list';
import CityAlphabet from 'components/city/alphabet';
import { getCities } from 'api/home';
import { ERR_OK } from 'api/config';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted() {
    this._getCityInfo()
  },
  methods: {
    _getCityInfo() {
      getCities().then(({ ret, data }) => {
        if (ret === ERR_OK) {
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      })
    },
    handleLetterChange(letter) {
      this.letter = letter
    },
    change(letter) {
      this.letter = letter;
    }
  }
}
</script>
<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
  transition all 0.3s

// .fade-enter, .fade-leave-to
.fade-leave-to
  transform translate3d(100%, 0, 0)
</style>
