export default {
    name: "shopping",
    data() {
        return {
            //判断购物车里面是否有东西
            status:false,
            //单选和复选框、加减按钮状态
            check:false,
            checkMe:true,
            edit:'编辑',
            count:1,
            getPrice:199,
            yes:false,
            trolleys:[]
        };
    },
    mounted:function(){
        this.trolleys=localStorage.getItem("trolley");
        this.trolleys=JSON.parse(this.trolleys);
        if(this.trolleys==null){
            this.status=true;
        }
    },
    methods:{
        edits(){
            this.edit=='编辑'?this.edit='完成':this.edit='编辑'
            this.edit=='编辑'?this.check=false:this.check=true;
            this.edit=='编辑'?this.checkMe=false:this.checkMe=true;
         
        },
        desc(){
            if(this.count==1){
                    this.yes=true;                 
            }else{               
                this.count--;
            }           
        },
        add(){
            this.yes=false;
            this.count++;
        },
        changeClir(){
            this.checkMe=!this.checkMe;
        }   
    },
    computed:{        
        getPrices:function(){
            return this.count*this.getPrice;
        },
       
    }
    
};