<template>
  <footer id="buttom-tabs-wrap">
    <div
      v-for="tab in tabs"
      :key="tab.path"
      :class="['tab', $route.path === tab.path ? 'active-tab' : '']"
      @click="to(tab.path)"
    >
      <i :class="['iconfont', 'icon', tab.icon]" />
      <span class="title">{{ tab.title }}</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'BottomTabs',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      tabs: [
        {
          icon: 'icon-home',
          title: '首页',
          path: '/'
        },
        {
          icon: 'icon-cake',
          title: '蛋糕',
          path: '/list'
        },
        {
          icon: 'icon-bag',
          title: '购物袋',
          path: '/shoppingBag'
        },
        {
          icon: 'icon-mine',
          title: '我的',
          path: '/mine'
        }
      ]
    }
  },
  methods: {
    // 路由跳转
    to (path: Pick<RouteRecordRaw, 'path'>): void {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/style/color.scss";

#buttom-tabs-wrap {
  width: 100%;
  height: 100px;
  border-top: 2px solid #d1c6af;
  overflow-x: hidden;
  overflow-y: auto;
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
