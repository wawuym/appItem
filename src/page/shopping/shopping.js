export default {
    name: "shopping",
    data() {
        return {
            //判断购物车里面是否有东西
            status:false,
            //单选和复选框的状态
            check:false,
            //加减按钮状态
            jisun:true
        };
    },
    methods:{
        edit(){
            this.check=true;
            this.jisun=false;
        },
        
    },
    
};