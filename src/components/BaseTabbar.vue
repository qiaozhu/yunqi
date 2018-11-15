<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon='wap-home'
        to="/activity">
        <span>活动</span>
        <!-- <img slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"> -->
      </van-tabbar-item>
      <van-tabbar-item icon="chat"
        to="/forum">论坛</van-tabbar-item>
      <van-tabbar-item icon="contact"
        to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data: function () {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  }
}
</script>
<style>
</style>
