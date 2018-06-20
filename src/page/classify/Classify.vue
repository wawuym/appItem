<template>
  <div class="content">
      <div class="classifyTop">
        <i class="layui-icon">&#xe615;</i>
        <input type="text" placeholder="请输入搜索的内容">
      </div>
      <ul v-for="data in dataJson" :key="data.id">
      <li v-for="da in data" :key="da.id">
      <div class="img">
        <img :src="da.photo" alt="他大爷">
      </div>
     <div class="title">
        <h2>{{da.name}}</h2>
        <p>￥{{da.price}}</p>
        <i class="layui-icon">&#xe602;</i>
     </div>
      </li>
      </ul>
  </div>
 
</template>

<script>
export default {
  name: 'classify',
  data () {
    return {
      dataJson:[]
    }
  },
  created(){
    this.$axios.get("static/data/flowerData.json")
    .then( resp =>{
      this.dataJson = resp.data;
      console.log(resp.data)
    }).catch( error =>{
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.classifyTop{
  width:100%;
  height:60px;
  line-height:60px;
  position: relative;
  margin-bottom: 20px;
  > i{
    position: absolute;
    left:15px;
    top: 0px
  }
  input{
    height:35px;
    width:100%;
    border: 1px solid #000;
    border-radius: 30px;
    background: white;
    padding-left: 40px;
  }
}
ul{
width:100%;
li{
  width:100%;
  margin-bottom:15px;
  border-bottom: 1px solid rgb(215,215,215);
  padding-bottom: 10px; 
  overflow: hidden;
  
  .img{
    width:30%;
    height:auto;
    display: inline-block;
    overflow: hidden;
    >img{
      width: 100%;
    }
  }
  .title{
    width: 65%;
    float: right;
    margin-top: 30px;
    position: relative;
    h2{
      height:50px;
      line-height:50px;
      font-size: 25px;
      font-weight:inherit;
    }
    p{
      color:red;
      font-size:18px;
    }
    >i{
    font-size:30px;
    position: absolute;
    top: 25px;
    right: 10px;
  }
  }

}
}

</style>
