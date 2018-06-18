<template>
  <div class="content">
    <h3 class="confirm">商品信息确认</h3>
    <div>
      <h3>价格信息</h3>
      <p>商品总价：</p>
      <p>{{getSumPrice}}</p>
      <p>运送费：</p>
      <h4>
        订单总计
      </h4>
    </div>
    <div>
      <h3>收货信息</h3>
      <p>收货地址：</p>
      <p>收货人：</p>
      <p>邮编</p>
      <p>电话</p>
    </div>
  </div>
</template>

<script src='./computation.js'/>


<style lang="scss" scoped >

@import "./computation.scss";

</style>
