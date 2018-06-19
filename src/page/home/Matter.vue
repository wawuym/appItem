<template>
  <div class="matter">


      <ul v-for="(data,index) in dataJson" :key="data.id">
        <h1>{{title[index]}}</h1>
      <li v-for="da in data" :key="da.id">
      <img :src="da.photo" alt="他大爷">
      <h2>{{da.name}}</h2>
      <p>￥{{da.price}}</p>
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
    MatterData(){
      this.data = dataJson;
      console.log("我是 matter 里面 答应 的" + this.data);
      console.log(dataJson);
    },
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
    margin:15px 0 5px 0;
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
