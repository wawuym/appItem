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
       <div class="edit" @click="edit">编辑</div>
       <div class="flow-list">
         <ul>
           <li class="check" v-if='check'>   
              <span class="no" v-if='check'></span>           
              <span class="yes" v-else></span>
           </li>
           <li class="pic"><img src="https://www.amflower.com/images/flowers/62741-big.jpg" alt=""></li>
           <li class="detail">
             <h6>缤纷设计鲜花系列</h6>
             <p class="useFlower">爱情鲜花，周年纪念，求婚鲜花，生日鲜花</p>
             <span class="price">￥109</span>
           </li>

             <div class="layui-btn-group layui-btn-size" v-if='jisun'>
                <button class="layui-btn layui-btn-primary layui-btn-xs">—</button>
                <button class="layui-btn layui-btn-primary layui-btn-xs">1</button>
                <button class="layui-btn layui-btn-primary layui-btn-xs"><i class="layui-icon">&#xe654;</i></button>
             </div>  
         </ul>    
       </div>
       <div class="layui-btn-container play">
           <button class="layui-btn layui-btn-warm layui-btn-fluid">前往支付</button>
        </div>
    </div>

    

  </div>
</template>
<script src='./shopping.js'/>

<style lang="scss" scoped >
 @import "./shopping.scss";

</style>
