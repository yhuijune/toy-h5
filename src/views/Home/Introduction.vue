<template>
  <section class="introduction">
    <p v-for="(item, idx) in list" :key="idx">
      <van-icon class="icon" name="checked" />
      <span class="des">{{ item }}</span>
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Introduction',
  data () {
    return {
      list: ['认证龙头企业', '16年品牌', '3小时送达', '最近xx条好评']
    }
  }
})
</script>

<style scoped lang="scss">
.introduction {
  height: 60px;
  display: flex;
  justify-content: space-around;
  flex: 4;
  p {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    color: #71797f;
    .icon{
      margin-right: 4px;
    }
  }
}
</style>
