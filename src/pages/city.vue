<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    />
    <city-alphabet :cities="cities" @change="change" />
  </div>
</template>

<script>
import CityHeader from 'components/city/header.vue';
import CitySearch from 'components/city/search.vue';
import CityList from 'components/city/list.vue';
import CityAlphabet from 'components/city/alphabet.vue';
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
