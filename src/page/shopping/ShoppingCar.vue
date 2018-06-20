<template>
  <div class="content">
      <!-- 无商品时 -->
    <table v-if="status"><tbody><tr><td class="wrap">
    <div>
      <p class="tip-word">购物车空空如也</p>
      <router-link tag="span" to = "/home" exact class="go-shopping">去逛逛</router-link>
    </div>
    </td></tr></tbody></table> 
    <!-- 有商品时  -->
    <div v-else>
       <div class="edit"><span  @click="edits">{{edit}}</span></div>
       <div class="flow-list">
         <ul v-for='getFlower in trolleys' :key='getFlower.id'>
           <li class="check" v-if='check'>   
              <span class="no" v-if='checkMe' @click="changeClir"></span>           
              <span class="yes" v-else></span>
           </li>
           <li class="pic"><img :src="getFlower.photo"></li>
           <li class="detail">
             <h6>{{getFlower.name}}</h6>
             <p class="useFlower">{{getFlower.details.flowerSweper}}</p>
             <span class="price">￥{{getFlower.price}}</span>
           </li>

             <div class="layui-btn-group layui-btn-size" v-if='!check'>
                <button class="layui-btn layui-btn-primary layui-btn-xs" @click='desc' :disabled='yes'>—</button>
                <input type="button" class="layui-btn layui-btn-primary layui-btn-xs" v-model='count' readonly>
                <button class="layui-btn layui-btn-primary layui-btn-xs" @click='add'><i class="layui-icon">&#xe654;</i></button>
             </div>  
         </ul>    
       </div>
       <div class="layui-btn-container play">
           <router-link tag="button"  :to="{name:'ComputationCenter',params:{a:getPrices}}" class="layui-btn layui-btn-warm layui-btn-fluid">前往支付</router-link>
        </div>       
    </div>

    

  </div>
</template>
<script src='./shopping.js'/>

<style lang="scss" scoped >
 @import "./shopping.scss";

</style>
