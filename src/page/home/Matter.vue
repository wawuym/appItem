<template>
  <div class="matter">
    <p>我是Matter</p>
    <ul>
    <li v-for='data in dataJson' :key="data.id">
      <img :src="data.photo" alt="他大爷">
      <h2>{{data.name}}</h2>
      <p>￥{{data.price}} 大洋</p>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'matter',
  data () {
    return {
     data :""
    }
  },
  props:{
    dataJson:{
      type:Array,
      required:true
    },
  },
  methods:{

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
    li{
      width: 45%;
      margin-top: 15px;
      img{
        width:100%;

      }
    }
  }
}


</style>
