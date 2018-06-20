<template>
  <div class="content">
    <!-- <p>我是home 轮播图</p> -->
    <carousel></carousel>
    <cut></cut>
    <matter v-on:chang = "upchang($event)" :dataJson = dataJson ></matter>
    <div class="detail" v-if = "delet">
      <div id="dele" v-on:click = "dele">x</div>
      <div class="cont-title">
        <div class="img">
        <img :src="cont.photo" alt="他大爷">   
        </div>
        <div class="title-right">
        <h2>名字: {{cont.name}}</h2>
        <p>价格: ￥ {{cont.price}}</p>
        </div>
        <div class="detail-title">
        <p>适合对象: {{detail.flowObject}}</p>
        <p>鲜花类型: {{detail.useFlower}}</p>
        <p>鲜花花语: {{detail.flowerSweper}}</p>
        <p>配送范围: {{detail.delivery}}</p>
      </div>
      <button v-on:click ="add" class="add">加入购物车</button>
      <button v-on:click = "changback" class="buy">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Carousel from './Carousel'
  import Matter from './Matter'
  import Cut from './Cut'
export default {
  name: 'home',
  //数据
  data () {
    return {
     dataJson:[],
     delet:false,
     detail:"",
     cont:"wrt",
     carts:[],
    }
  },
  //获取json 数据 ，并从父级 传给 子级
  created(){
   this.$axios.get("static/data/flowerData.json")
    .then( resp => {
      console.log(resp.data)
      this.dataJson=resp.data
    })
    .catch(error => {
      console.log(error)
    })
  },

 methods:{
    upchang(title){
      this.delet = true;
      this.cont = title;
      this.detail = title.details;
      console.log(this.cont)
    },
    dele(){
      this.delet = false;
    },


    //将数据存入 json 写到 locationstorage 中
    add(){
        this.carts = localStorage.getItem("trolley");   
        if(!this.carts){							      //如果carts 为空的话，返回一个空数组
            this.carts = [];
        }else{
            this.carts = JSON.parse(this.carts);                        //else 就解析 json 文件
            }
        this.carts.push(this.cont);						// 将 对象data 存入一个 carts
        localStorage.setItem("trolley", JSON.stringify(this.carts));      
        console.log(this.carts)
    }


  },

  //计算 函数 里面写 传入的组件名
  components:{
    Carousel,
    Matter,
    Cut
  },

 
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.content{
  .detail{
    position: fixed;
    top: 50px;
    left: 5px;
    width: 97%;
    background: white;
    height:calc(100% - 115px);
    z-index:4;
    border: 1px solid #000;
    #dele{
      box-sizing: border-box;
      padding-right:30px;
      width: 100%;
      text-align: right;
      font-size: 30px;
      border-bottom: 1px solid #000;
    }
    .cont-title{
      box-sizing: border-box;
      padding: 25px 15px;
      .img{
      width:45%;
      overflow: hidden;
      display: inline-block;
      >img{
        width: 100%;
      }
    }
    .title-right{
      width: 46%;
     float: right;
      h2{
        height: 50px;
        line-height: 50px;
        margin-top: 40px;
        font-size: 23px;
      }
      p{
        color: red;
        font-size: 18px;
      }
    }
    .detail-title{
      margin-top: 20px;
      line-height: 40px;
      font-size: 18px;
    }
    }
    button{
      width:45%;
      border: 2px solid #31d411;
      color: white;
      height: 40px;
      background:#31d411;
      text-align: center;
      font-weight: inherit;
      letter-spacing: 3px;
      margin-right: 10px;
      &:hover{
        background: #ffb800;
        border: 1px solid #ffb800;
      }
    }
  }
   
}


</style>
