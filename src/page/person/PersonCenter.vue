<template>
    <div class="content">
        <!-- 头像 -->
        <div class="headPortrait">
            <div class="mask">
                <div></div>
                <p>XXXXXX</p>
            </div>
        </div>
        <!-- 个人中心 -->
        <div class="personal">
            <table class="layui-table">
                <router-link tag='tr' :to="{name:'PersonalData'}">
                    <td>设置个人资料
                        <i class="layui-icon">&#xe602;</i>
                    </td>
                </router-link>
                <router-link tag='tr' to="./Setplace">
                    <td>设置收货地址
                        <i class="layui-icon">&#xe602;</i>
                    </td>
                </router-link>
            </table>
            <table class="layui-table">
                <router-link tag='tr'>
                    <td>我的订单
                        <i class="layui-icon">&#xe602;</i>
                    </td>
                </router-link>
                <router-link tag='tr'>
                    <td>我的评价
                        <i class="layui-icon">&#xe602;</i>
                    </td>
                </router-link>
            </table>
            <table class="layui-table">
                <router-link tag='tr'>
                    <td>商品收藏
                        <i class="layui-icon">&#xe602;</i>
                    </td>
                </router-link>
                <router-link tag='tr'>
                    <td>店铺收藏
                        <i class="layui-icon">&#xe602;</i>
                    </td>
                </router-link>
                <router-link tag='tr'>
                    <td>浏览记录
                        <i class="layui-icon">&#xe602;</i>
                    </td>
                </router-link>
            </table>
        </div>
        <!-- 退出登录 -->
        <button class="layui-btn layui-btn-warm layui-btn-fluid">退出登录</button>
    </div>
</template>

<script>
export default {
    name: "person",
    data() {
        return {};
    },
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.content {
    padding: 0;
    .headPortrait {
        width: 100%;
        height: 180px;
        background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529630430&di=3647928f6575b87f3a14445319680bf7&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F58a5084a9abe1.jpg)
            center center;
        background-size: 250% auto;
        position: relative;
        .mask {
            width: 100%;
            height: 180px;
            background: white;
            opacity: 0.6;
            display: flex;
            div {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529630430&di=3647928f6575b87f3a14445319680bf7&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F58a5084a9abe1.jpg)
                    center center;
                background-size: 200% auto;
                margin: auto;
            }
            p {
                width: 100%;
                position: absolute;
                bottom: 10px;
                text-align: center;
            }
        }
    }
    .personal {
        i {
            float: right;
        }
    }
    button {
        margin-bottom: 20px;
        border-radius: 20px;
    }
}
</style>
