<template>
  <div class="content">
    <div class='fillForm'>
        <span>姓名</span>
        <input type="text" placeholder="请填写您的真实姓名" class="personName txtName">
    </div>
    <div class='fillForm'>
        <span>联系电话</span>
        <input type="text" placeholder="请填写您的真实姓名" class="personName">
    </div>
    <div class='fillForm'>
        <span>邮政编码</span>
        <input type="text" placeholder="请填写您的真实姓名" class="personName">
    </div>
    <div class='fillForm selectAddress'>
      <select>
        <option value="">请选择省</option>
        <option value="浙江" selected>四川省</option>
        <option value="你的工号">江西省</option>
        <option value="你最喜欢的老师">福建省</option>
      </select>
      <select>
        <option value="">请选择市</option>
        <option value="杭州">成都</option>
        <option value="温州">温州</option>
        <option value="温州">台州</option>
        <option value="温州">绍兴</option>
      </select>
      <select>
        <option value="">请选择县/区</option>
        <option value="西湖区">青羊区</option>
        <option value="余杭区">余杭区</option>
        <option value="拱墅区">临安市</option>
      </select>
  </div>
  <div class='fillForm'>
        <span>详细地址</span>
        <input type="text" placeholder="详细填写街道，楼栋，门牌号" class="personName">
  </div>
  <div class="layui-btn-container makeSure">
        <button class="layui-btn layui-btn-warm layui-btn-fluid">确认地址</button>
  </div>   
  </div>
</template>

<script src='./setPersonPlace.js'/>




<style lang="scss" scoped >
@import "./setPersonPlace.scss";
</style>
