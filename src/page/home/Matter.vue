<template>
  <div class="matter">
      <ul v-for="(dataInfo,index) in dataJson" :key="dataInfo.id">
        <h1>{{title[index]}}</h1>
        <!-- 点击事件 detail （ v-for  里面的 data ） -->
      <li v-on:click = "detail(data)"  v-for="data in dataInfo" :key="data.id">
      <img :src="data.photo" alt="他大爷">
      <h2>{{data.name}}</h2>
      <p>￥{{data.price}}</p>
      </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'matter',
  data () {
    return {
     title:["love之花","birthday之花","friendship之花"]
    }
  },
  props:{
    dataJson:{
      type:Array,
      required:true
    },
  },
  methods:{
    //传入 v-for 循环的 data , 谁点 就是  那个 data 数据
    detail(data){
      //将子页面 的 data数组中 details 数据 传给 父级
      this.$emit("chang",data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.matter{
  width: 100%;
  height:auto;
 
  ul{
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  h1{
    width:100%;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 2px;
    margin:25px 0 5px 0;
  }
    li{
      width: 47%;
      margin-top: 15px;
      text-align: center;
      img{
        width:100%;
      }
      h2{
        font-size: 17px;
        margin: 4px 0;
      }
      p{
        color:red;
      }
    }
  }
}


</style>
