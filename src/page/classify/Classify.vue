<template>
  <div class="content">
<<<<<<< HEAD
    <!-- 分类的 页面 -->
=======
>>>>>>> 8ca0f3c797ad7536835a751d53e711c4afc4b799
      <div class="classifyTop">
        <i class="layui-icon">&#xe615;</i>
        <input type="text" placeholder="请输入搜索的内容">
      </div>
      <!-- 获取 datajson 数据 循环 里面 套 循环  -->
      <ul v-for="data in dataJson" :key="data.id"> 
      <li v-for="da in data" v-on:click ="upchang(da)" :key="da.id">
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
<<<<<<< HEAD

      <!-- 通过 上面  li 的点击事件 传入 cont 的值。 -->
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




=======
>>>>>>> 8ca0f3c797ad7536835a751d53e711c4afc4b799
  </div>
</template>

<script>
export default {
  name: 'classify',
  data () {
    return {
      dataJson:[],
      delet:false,
      detail:"",
      cont:"wrt"
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
  },




 methods:{
   //从上面的 v-for里面 拿出来 的值 ，把 da 赋值给 title
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
            this.carts = JSON.parse(this.carts);       
            alert("添加购物车成功")                 //else 就解析 json 文件
            }
        this.carts.push(this.cont);						// 将 对象data 存入一个 carts
        localStorage.setItem("trolley", JSON.stringify(this.carts));      
        console.log(this.carts)
    }


  },
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
// 详情页面的class 样式
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



</style>
