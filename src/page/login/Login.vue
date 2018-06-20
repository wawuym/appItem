<template>
    <div class="content">
        <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
            <ul class="layui-tab-title">
                <li :class="{'layui-this':login}" @click="loginFun">登陆</li>
                <li :class="{'layui-this':resister}" @click="resisterFun">注册</li>
            </ul>
            <div class="layui-tab-content">
                <div class=" layui-tab-item " :class="{'layui-show':login}">
                    <i class="layui-icon">&#xe678;</i>
                    <input type="text" name="title" required lay-verify="required" placeholder="请输入你的手机号" autocomplete="off" class="layui-input">
                    
                    <i class="layui-icon">&#xe673;</i>
                    <input type="password" name="password" required lay-verify="required" placeholder="请输入你的密码" autocomplete="off" class="layui-input">
                    
                    <button class="layui-btn layui-btn-warm layui-btn-fluid">登录</button>
                </div>
                <div class="layui-tab-item" :class="{'layui-show':resister}">
                    <i class="layui-icon">&#xe678;</i>
                    <input type="text" name="title" required lay-verify="required" placeholder="请输入你的手机号" autocomplete="off" class="layui-input">
                    
                    <i class="layui-icon">&#xe66f;</i>
                    <input type="text" name="password" required lay-verify="required" placeholder="请输入你的昵称" autocomplete="off" class="layui-input">

                    <i class="layui-icon">&#xe673;</i>
                    <input type="password" name="password" required lay-verify="required" placeholder="请输入你的密码" autocomplete="off" class="layui-input">
                    
                    <i class="layui-icon">&#xe673;</i>
                    <input type="password" name="password" required lay-verify="required" placeholder="请再次输入你的密码" autocomplete="off" class="layui-input">
                    
                    <button class="layui-btn layui-btn-warm layui-btn-fluid">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "login",
    data() {
        return {
            login: true,
            resister: false
        };
    },
    methods: {
        // 登陆注册切换
        loginFun() {
            this.login = true;
            this.resister = false;
        },
        resisterFun() {
            this.login = false;
            this.resister = true;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.layui-tab {
    width: 100%;
    position: relative;
    .layui-tab-title {
        width: 130px;
        margin: 0 auto;
    }
    input {
        border: none;
        border-bottom: 1px solid black;
        padding: 0 0 0 35px;
        margin: 10px auto;
    }
    .layui-tab-item {
        i {
            position: absolute;
            margin: 7px 7px;
            font-size: 20px;
        }
    }
    button{border-radius: 20px;margin-top: 50px}
}
</style>
