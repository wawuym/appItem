<template>
  <div class="content">
    <h3 class="confirm">商品信息确认</h3>
    <!-- 价格信息 -->
    <div class='priceInfo'>
      <h3 class="priceTitle">价格信息</h3>
      <div class="pricePartenNode">
         <p class="textLeft">商品总价：</p>
         <p class="textRight">￥{{getSumPrice}}</p>
      </div>
     <div class="pricePartenNode">
         <p class="textLeft">运送费：</p>
         <p class="textRight">包邮</p>
      </div>
      <div class="pricePartenNode">
         <p class="textLeft priceTitle">订单总计：</p>
         <p class="textRight">30</p>
      </div>
    </div>
    <!-- 收货信息 -->
    <div class='priceInfo addressInfo'>

      <h3 class="priceTitle">收货信息</h3>
      <div class="pricePartenNode">
         <p class="textLeft">收货地址：</p>
         <p class="textRight"></p>
      </div>
     <div class="pricePartenNode">
         <p class="textLeft">收货人：</p>
         <p class="textRight"></p>
      </div>
      <div class="pricePartenNode">
         <p class="textLeft ">邮编：</p>
         <p class="textRight"></p>
      </div>
      <div class="pricePartenNode">
         <p class="textLeft ">电话：</p>
         <p class="textRight"></p>
      </div>
       <div class="pricePartenNode ">
         <p class="textLeft ">修改地址：</p>
         <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
      </div>
       <div class="pricePartenNode ">
         <p class="textLeft ">新增地址：</p>
         <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
      </div>  
       <div class="pricePartenNode txtaddress">
         <p class="textLeft ">修改地址：</p>
         <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
      </div>
      <router-link tag='div' to="./Setplace" exact class="pricePartenNode txtaddress">
         <p class="textLeft ">新增地址：</p>
         <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
      </router-link>   
    </div>

      <h3 class="confirm">选择支付方式</h3>
    <div class='priceInfo play'>
         <div class="pricePartenNode address">
            <p class="textLeft "><img src="../../assets/weixin.png" alt="" class="palTool"> <span>微信支付</span></p>
            <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
        </div>
        <div class="pricePartenNode address">
            <p class="textLeft "><img src="../../assets/zhifubao.png" alt="" class="palTool"> <span>支付宝支付</span></p>
            <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
        </div>
        <div class="pricePartenNode address">
            <p class="textLeft "><img src="../../assets/yinhangka.png" alt="" class="palTool"> <span>银行卡</span></p>
            <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
        </div>
        <div class="pricePartenNode address">
            <p class="textLeft "><img src="../../assets/xingyongka.png" alt="" class="palTool"> <span>信用卡</span></p>
            <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
        </div>
        <div class="pricePartenNode address">
            <p class="textLeft "><img src="../../assets/visa.png" alt="" class="palTool"><span>VISA</span></p>
            <p class="textRight"><i class="layui-icon">&#xe602;</i>  </p>
        </div>
    </div>
  </div>



</template>

<script src='./computation.js'/>


<style lang="scss" scoped >
@import "./computation.scss";
</style>
