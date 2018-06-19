<template>
  <div class="content">
    <!-- <p>我是home 轮播图</p> -->
    <carousel></carousel>
    <matter :dataJson = dataJson ></matter>
  </div>
</template>

<script>
  import Carousel from './Carousel'
  import Matter from './Matter'

export default {
  name: 'home',
  //数据
  data () {
    return {
     dataJson:[],
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

  //计算 函数 里面写 传入的组件名
  components:{
    Carousel,
    Matter
  },

  methods:{
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >



</style>
