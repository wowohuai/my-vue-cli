import { mapMutations } from 'vuex';


const handleClickMixin = {
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
}

export default handleClickMixin;
