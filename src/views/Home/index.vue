<template>
  <div class="home">
    <swipe></swipe>
    <introduction></introduction>
    <navigation></navigation>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Swipe, Introduction, Navigation } from './components'

export default defineComponent({
  name: 'Home',
  components: {
    Swipe,
    Introduction,
    Navigation
  }
})
</script>

<style scoped lang="scss">
.home {
  padding: 24px;
}
</style>
