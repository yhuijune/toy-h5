<template>
  <div id="container-wrap">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Container',
  components: {},
  props: {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="scss">
#container-wrap {
  height: calc(100vh - 100px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
