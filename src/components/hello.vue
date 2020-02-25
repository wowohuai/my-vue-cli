<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
