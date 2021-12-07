<template>
  <nav class="home-nav">
    <div class="nav-item" v-for="(nav, idx) in navList" :key="idx">
      <a :style="{ marginTop: idx >= 5 && '10px' }">
        <img
          :class="[idx >= 5 ? 'nav-img' : 'nav-small-img']"
          :src="nav.img"
          :alt="nav.title"
        />
        <span :style="{ fontWeight: idx <= 4 && 'bold' }">{{ nav.title }}</span>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface NavItem {
  img: string;
  title: string;
  link: string;
}

const list: NavItem[] = [
  {
    img: 'https://img02.hua.com/wx_imgs/home_flowers.png',
    title: '鲜花',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_forever.png',
    title: '永生花',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_cakes.png',
    title: '蛋糕',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_gifts.png',
    title: '礼品',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_chocolate.png',
    title: '巧克力',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_birthday_1224.png',
    title: '生日祝福',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_express_1224.png',
    title: '表白求婚',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_business_1224.png',
    title: '商务开业',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_anniversary_1224.png',
    title: '周年纪念',
    link: ''
  },
  {
    img: 'https://img02.hua.com/wx_imgs/home_group_1224.png',
    title: '企业团购',
    link: ''
  }
]
export default defineComponent({
  name: 'home-navigation',
  setup () {
    const navList = ref(list)
    return {
      navList
    }
  }
})
</script>

<style lang="scss" scoped>
.home-nav {
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;

  .nav-item {
    width: calc(100% / 5);
    height: 120px;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin-top: 12px;
        font-size: 16px;
      }
    }
    .nav-img {
      width: 48px;
      height: 48px;
    }
    .nav-small-img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
