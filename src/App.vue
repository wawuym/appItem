<template>
  <div id="app">
    <!-- 头部  -->
    <header>{{title}}</header>

    <!-- 通过路由来点击添加 的内容 -->
    <router-view/>

    <!-- 尾部 -->
    <footer>
      <div class="bottom">
      <ul>
        <router-link tag= "li" to = "/home" exact> <i class="layui-icon layui-size">&#xe68e;</i> <p>首页</p>  </router-link>
        <router-link tag= "li" to = "/classify"><i class="layui-icon layui-size">&#xe857;</i><p>分类</p> </router-link>
        <router-link tag= "li" to = "shopping"><i class="layui-icon layui-size">&#xe657;</i><p>购物车</p> </router-link>
        <router-link tag= "li" to = "person"><i class="layui-icon layui-size">&#xe770;</i><p>个人中心</p> </router-link>
      </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      title:"首页",
      navIem:["首页","分类","购物车","wo"]
    }
  },
}
</script>

<style lang="scss">
// 公共的样式
*{
 box-sizing: border-box; 
}
html,body {
  height: 100%;
  font: normal 14px "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
 
  background:#f2f2f2;
}
#app{
  height:100%;
}
ul{
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
}
//内容的样式
.content{
  height:calc(100% - 116px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px;
}

// 头部的样式
header{
  height:50px;
  background:#000;
  color:white;
  line-height:50px;
  text-align: center;
   font-size: 16px;
}
//尾部的样式
footer{
  height:60px;
  .layui-size{
    font-size:25px;  
  }
  .bottom{
    box-sizing: border-box;
    background:#000;
    color:white;
    padding-top: 10px;
    padding-bottom: 10px;
   
  }
}

footer .bottom ul{
  display: flex
}
footer .bottom ul li{
  height:46px;
  width:24%;
  justify-content: space-between;
  // line-height:30px;
  text-align: center;
}


</style>





