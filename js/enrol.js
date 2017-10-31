$(function(){
  'use strict';

  $('input.number').on('blur',function(){
    isNumber();
  });
  $('input.password').on('blur',function(){
    isPassword();
  });
  $('input.phone').on('blur',function(){
    isPhone();
  })
  $('.btn-enrol').on('click',function(){
    if(!isValid()){
      alert('注册失败，信息填写有误');
    }else{
      alert('注册成功');
    }
  });

  function isValid(){
    $('input').blur();
    if(!isNumber()||!isPassword()||!isPhone()){
      return false;
    }else
      return true;

  }

  function isNumber(val){
    var pattern = /^[a-zA-Z][a-zA-Z0-9]+$/;
    var min =6;
    var val = $('input.number').val();
    var numberError = $('.account-number .error');
    if(!val){
      numberError.text("请输入账号");
      numberError.show();
      return false;
    }else if(val.length<min){
      numberError.text("账号格式不对,首字母开头,长度不少于6,如a12345");
      numberError.show();
      return false;
    }else if(!pattern.test(val)){
      numberError.text("账号格式不对,首字母开头,长度不少于6,如a12345");
      numberError.show();
      return false;
    }else{
      numberError.hide();
      return true;
    }
  }

  function isPassword(val){
    var lv=0;
    var $passwordError = $('.account-password .error');
    var pattern = /^(?![^a-zA-Z]+$)(?!\D+$)/ ;
    var val = $('input.password').val();
    if(!val){
      $passwordError.text("请输入密码");
      $passwordError.show();
      return false;
    }else if(val.length<6){
      $passwordError.text("密码长度至少为6");
      $passwordError.show();
      return false;
    }else if(!pattern.test(val)){
      $passwordError.text("密码必须包含数字和字母");
      $passwordError.show();
      return false;
    }else{
      $passwordError.hide();
      return true;
    }
  }

  function isPhone(val){
    var pattern = /^1[34578]\d{9}$/;
    var val = $('input.phone').val();
    var $phoneError = $('.account-phone .error');
    if(!val){
      $phoneError.text("请输入手机号码");
      $phoneError.show();
      console.log('1');
      return false;
    }else if(!pattern.test(val)){
      $phoneError.text("手机号码不正确");
      $phoneError.show();
      return false;
    }else{
      $phoneError.hide();
      return true;
    }
  }
});
