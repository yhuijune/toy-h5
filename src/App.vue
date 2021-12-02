<template>
  <container></container>
  <buttom-tabs></buttom-tabs>
</template>

<script lang="ts">
import Container from '@/layout/Container.vue'
import BottomTabs from '@/layout/BottomTabs.vue'
export default {
  name: 'App',
  components: {
    container: Container,
    'buttom-tabs': BottomTabs
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  position: relative;
}
</style>
