<template>
  <footer id="buttom-tabs-wrap">
    <div
      v-for="tab in tabs"
      :key="tab.path"
      :class="['tab', $route.path === tab.path ? 'active-tab' : '']"
      @click.stop="go(tab.path)"
    >
      <i :class="['iconfont', 'icon', tab.icon]" />
      <span class="title">{{ tab.title }}</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'BottomTabs',
  data () {
    return {
      tabs: [
        { icon: 'icon-home', title: '首页', path: '/' },
        { icon: 'icon-cake', title: '蛋糕', path: '/list' },
        { icon: 'icon-bag', title: '购物袋', path: '/shoppingBag' },
        { icon: 'icon-mine', title: '我的', path: '/mine' }
      ]
    }
  },
  methods: {
    // 跳转
    go (path: Pick<RouteRecordRaw, 'path'>): void {
      this.$router.replace(path)
    }
  }
})
</script>

<style scoped lang="scss">
@import "./src/assets/style/color.scss";
#buttom-tabs-wrap {
  width: 100%;
  height: 100px;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f7f9fa;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  .tab {
    width: calc(100vw / 4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      font-size: 48px;
    }
    .title {
      font-size: 16px;
      margin-top: 8px;
    }
  }
  .active-tab {
    color: $base-color;
  }
}
</style>
