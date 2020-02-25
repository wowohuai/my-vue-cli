<template>
  <div id="app">
    <Hello :msg="msg" />
  </div>
</template>

<script>
import Hello from '~/components/hello.vue';

export default {
  name: 'App',
  components: {
    Hello
  },
  data() {
    return {
      msg: 'hello world'
    }
  }
}
</script>
<style lang="stylus" scoped>
#app
  color red
</style>
