import { mapMutations } from 'vuex';


const handleClickMixin = {
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push('/');
      if (this.keyword) {
        this.keyword = '';
      }
    },
    ...mapMutations(['changeCity'])
  },
}

export default handleClickMixin;
