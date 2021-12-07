<template>
  <van-swipe class="swipe-wrap" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-if="loading">
      <van-loading />
    </van-swipe-item>
    <template v-else>
      <van-swipe-item
        v-for="item in list"
        :key="item.key"
        @click.stop="$router.replace('/list')"
      >
        <img
          style="width: 100%; height: 100%"
          :src="item.pic"
          :alt="item.key"
        />
      </van-swipe-item>
    </template>
  </van-swipe>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Swipe',
  data () {
    return {
      loading: false,
      list: []
    }
  },
  mounted () {
    this.loading = !this.loading
    setTimeout(() => {
      this.loading = !this.loading
      this.list = [
        {
          key: '1',
          pic: 'https://img02.hua.com/slider/21_brand_banner.png'
        },
        {
          key: '2',
          pic: 'https://img02.hua.com/slider/20_sheshou_banner_m.jpg'
        },
        {
          key: '3',
          pic: 'https://img02.hua.com/slider/21_brand_banner.png'
        }
      ]
    }, 2000)
  }
})
</script>

<style lang="scss" scoped>
@import "./src/assets/style/color.scss";
.swipe-wrap {
  height: 336px;
  border-radius: 14px;
  background-color: $skeleton-color;
  .van-swipe-item {
    height: 100%;
    line-height: 336px;
    text-align: center;
    font-size: 40px;
    color: #fff;
  }
}
</style>
