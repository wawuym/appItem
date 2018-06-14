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
        <router-link tag= "li" to = "/home" exact> 首页  </router-link>
        <router-link tag= "li" to = "/classify">分类</router-link>
        <router-link tag= "li" to = "shopping">购物车</router-link>
        <router-link tag= "li" to = "person">我</router-link>
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
  font: normal 16px "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
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
  height:calc(100% - 100px);
  overflow-x: hidden;
  overflow-y: auto;
}

// 头部的样式
header{
  height:50px;
  background:#000;
  color:white;
  line-height:50px;
  text-align: center
}
//尾部的样式
footer{
  height:50px;
}
footer .bottom{
  background:#000;
  color:white;
}
footer .bottom ul{
  display: flex
}
footer .bottom ul li{
  width:24%;
  justify-content: space-between;
  line-height:50px;
  text-align: center;
}


</style>





