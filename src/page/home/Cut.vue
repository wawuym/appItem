<template>
  <div class="cut">

    <div id="box">
            <ul id="con1" ref="con1" :class="{anim:animate==true}">
                <li v-for='item in items' :key="item.id">
                    <i class="glyphicon glyphicon-bell"></i>{{item.name}}</li>
            </ul>
    </div>


  </div>
</template>

<script>

// 实现 切换的效果




export default {
  name: 'cut',
    // 新闻滚动
    data() {
        return {
            animate: false,
            items: [
                //消息列表对应的数组
                { name: "双12全场坚果低至6折，更有隐藏神秘惊喜" },
                { name: "坚果最新上线啦" },
                { name: "好礼无限送" }
            ],
            userInfo: {},
            myProduct: []
        }
    },
    created() {
        setInterval(this.scroll, 1500); // 在钩子函数中调用我在method 里面写的scroll()方法，注意此处不要忘记加this,我在这个位置掉了好几次坑，都是因为忘记写this。
        this.getdata();
    },
    methods: {
        scroll() {
            let con1 = this.$refs.con1;
            // con1.style.marginTop='0px';
            this.animate = !this.animate;
            var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
            setTimeout(function() {
                that.items.push(that.items[0]);
                that.items.shift();
                // con1.style.marginTop='40px';
                that.animate = !that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
            }, 500);
        },
        getdata() {
            axios.get("http://localhost:8080/static/test.json").then(resp => {
                this.myProduct = resp.data;
                // console.log(this.myProduct);
                // console.log(this.myProduct[0].category[0].exhibitionSrc);
                // console.log(this.myProduct[0].category);
            });
        }
    }
}
 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
    #box{
        height:40px;
        width: 100%;
        background: #31d411;
        line-height:40px;
        color: white;
        text-align: center;
        overflow: hidden;
        margin-top: 20px;
    }

</style>
