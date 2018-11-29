<template>
  <div class="activity-page">
    <div aspectratio w-375-210>
      <div aspectratio-content>
        <van-swipe class="activity-home-swipe" :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <form action="/">
      <van-search
        v-model="value"
        class="activity-search"
        placeholder="请输入搜索关键词"
        maxlength="20"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-row class="activity-home-menu">
      <van-col span="6">
        <div class="a-menu-item">
          <img class="a-item-img" src="https://dummyimage.com/100x100/00b300/fff&text=A" alt>
          <div class="a-item-text">冬令营</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="a-menu-item">
          <img class="a-item-img" src="https://dummyimage.com/100x100/00b300/fff&text=A" alt>
          <div class="a-item-text">冬令营</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="a-menu-item">
          <img class="a-item-img" src="https://dummyimage.com/100x100/00b300/fff&text=A" alt>
          <div class="a-item-text">冬令营</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="a-menu-item">
          <img class="a-item-img" src="https://dummyimage.com/100x100/00b300/fff&text=A" alt>
          <div class="a-item-text">冬令营</div>
        </div>
      </van-col>
    </van-row>
    <van-panel class="special-recommend-panel">
      <div slot="header" class="panel-header">
        <i class="line-icon"></i>
        <span>特别推荐</span>
      </div>
      <div>内容内容内容内容内容内容内容内容</div>
    </van-panel>
    <base-tabbar/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, Lazyload, Search, Row, Col, Panel } from 'vant';
import BaseTabbar from '@/components/BaseTabbar';
import swipe1 from '@/assets/img/swipe1.jpg';
import swipe2 from '@/assets/img/swipe2.jpg';
import swipe3 from '@/assets/img/swipe3.jpg';

Vue.use(Lazyload);
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Search.name]: Search,
    [Row.name]: Row,
    [Col.name]: Col,
    [Panel.name]: Panel,
    BaseTabbar
  },

  data() {
    return {
      images: [swipe1, swipe2, swipe3],
      value: '',
      checkedGoods: ['1', '2', '3'],
      goods: [
        {
          id: '1',
          title: '进口香蕉',
          desc: '约250g，2根',
          price: 200,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
        },
        {
          id: '2',
          title: '陕西蜜梨',
          desc: '约600g',
          price: 690,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
        },
        {
          id: '3',
          title: '美国伽力果',
          desc: '约680g/3个',
          price: 2680,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
        }
      ]
    };
  },

  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },

    totalPrice() {
      return this.goods.reduce(
        (total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
        0
      );
    }
  },

  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },

    onSubmit() {
      Toast('点击结算');
    },
    onSearch() {},
    onCancel() {}
  }
};
</script>

<style>
@import '../../assets/css/activity.css';
</style>
