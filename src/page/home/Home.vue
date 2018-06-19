<template>
  <div class="content">
    <!-- <p>我是home 轮播图</p> -->
    <!-- <axios></axios> -->
    <matter :dataJson = dataJson ></matter>
  </div>
</template>

<script>
  import Axios from '../axios/axios'
  import Matter from '../home/Matter'

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
    Axios,
    Matter
  },

  methods:{
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >



</style>
