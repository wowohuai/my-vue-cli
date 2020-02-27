<template>
  <div class="page">
    <Header :city="city" />
    <home-swiper :swiper-list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script type="text/ecmascript-6">
import Header from 'components/home/header';
import HomeSwiper from 'components/home/swiper';
import HomeIcons from 'components/home/icons';
import HomeRecommend from 'components/home/recommend';
import HomeWeekend from 'components/home/weekend';
import { mapGetters } from 'vuex';
import { getHome } from 'api/home';
import { ERR_OK } from 'api/config';

export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapGetters(['city'])
  },
  mounted() {
    this._getHomeInfo();
  },
  methods: {
    _getHomeInfo() {
      getHome(this.city).then(({ ret, data }) => {
        if (ret === ERR_OK) {
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      })
    }
  }
}
</script>
