<template>
    <div class="content">
        <div class="per">
            昵称：<input type="text" placeholder="请输入你的昵称" class="int">
        </div>
        <div class="per">
            电话：<input type="text" placeholder="请输入你的电话" class="int">
        </div>
        <div class="per">
            邮箱：<input type="text" placeholder="请输入你的邮箱" class="int">
        </div>
        <div class="per">
            性别：
            <div class="radio">
                <input type="radio" name="sex" value="nan" title="男">男
                <input type="radio" name="sex" value="nv" title="女" checked>女
            </div>
        </div>
        <div class="per">
            个人描述：
            <textarea name="" required lay-verify="required" placeholder="留下你的个性签名吧！" class="layui-textarea"></textarea>
        </div>
       
            <button class="layui-btn layui-btn-warm layui-btn-fluid">确认修改</button>
        
        
            <button class="layui-btn layui-btn-warm layui-btn-fluid">重置</button>
       

    </div>
</template>

<script>
export default {
    name: "personalData",
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.content {
    .per {
        border-bottom: 1px solid black;
        padding: 8px 10px;
        margin-top: 10px;
        outline: none;
        .int {
            border: none;
        }
        .radio {
            display: inline-block;
        }
        textarea {
            display: inline-block;
            border: none;
        }
        
    }
    button {
            width: 40%;
            margin: 15px;
            border-radius: 20px;
        }
}
</style>