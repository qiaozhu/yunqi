<template>
  <div class="user-page">
    <img class="user-poster"
      src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="pending-orders" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="pending-deliver" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        待发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records"
        title="全部订单"
        is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="exchange"
        title="我的积分"
        is-link />
      <van-cell icon="gold-coin"
        title="我的优惠券"
        is-link />
      <van-cell icon="gift"
        title="我收到的礼物"
        is-link />
    </van-cell-group>
    <base-tabbar />
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
import BaseTabbar from '@/components/BaseTabbar'

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    BaseTabbar
  }
};
</script>

<style>
@import '../../assets/css/user.css';
</style>
