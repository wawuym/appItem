<template>
  <div class="content">
    <div class="research">
      <i class="layui-icon researchIcon">&#xe615;</i>
      <input type="text" required  lay-verify="required" placeholder="请输入你要查找的鲜花名称" autocomplete="off" class="layui-input searchInput">   
    </div>
    <ul class="searchList">
      <li class="pic"><img src="https://www.amflower.com/images/flowers-feature/62818-c.jpg" alt=""></li>
      <li class="detail">
        <p>弗郎花瓶</p>
        <p class="useFlower">爱情鲜花，周年纪念</p>
        <p class="price">109</p>
      </li>
      <li>
       <i class="layui-icon">&#xe602;</i>   
      </li>
    </ul>
  </div>
 
</template>

<script>
export default {
  name: 'classify',
  data () {
    return {
      flowerArr:[]
    }
  },
  created(){
    axios.get('static/data/flowerData.json?').then((res)=>{
        this.flowerArr=res.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >

@import './classify.scss'

</style>
