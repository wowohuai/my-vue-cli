<template>
  <transition name="fade"
              mode="in-out">
    <div>
      <detail-banner :sight-name="sightName"
                     :banner-img="bannerImg"
                     :banner-imgs="gallaryImgs" />
      <detail-header />
      <div class="content">
        <detail-list :list="list" />
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import DetailHeader from 'components/detail/header';
import DetailBanner from 'components/detail/banner';
import DetailList from 'components/detail/list';
import { getDetails } from 'api/home';
import { ERR_OK } from 'api/config';

export default {
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  created() {
    this._getDetails();
  },
  methods: {
    _getDetails() {
      getDetails(this.$route.params.id).then(({ ret, data }) => {
        if (ret === ERR_OK) {
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.content
  height 50rem

.fade-enter-active, .fade-leave-active
  transition all 0.3s

// .fade-enter, .fade-leave-to
.fade-leave-to
  transform translate3d(100%, 0, 0)
</style>
