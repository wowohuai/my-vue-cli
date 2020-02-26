<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    />
  </div>
</template>

<script>
import CityHeader from 'components/city/header.vue'
import CitySearch from 'components/city/search.vue'
import CityList from 'components/city/list.vue'
import { getCities } from 'api/home';
import { ERR_OK } from 'api/config';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
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
    }
  }
}
</script>
