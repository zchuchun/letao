

$(function(){
   $('.login').click(function(){
     
    var username = $('.mui-input-clear').val().trim();
    var password = $('.mui-input-password').val().trim();

    if(username === ''){
        mui.toast('请输入用户名');
        return;
    }
    if(password === ''){
        mui.toast('请输入密码');
        return;
    }

    $.ajax({
        type:'post',
        url:'/user/login',
        data:{
            username:username,
            password:password,
        },
        dataType:'json',
        success:function(info){
            if(info.success){
                 // 登录成功
                // (1) 有传参, 传递了retUrl, 需要跳转回去
                // (2) 没有传参, 跳转到会员中心页
                if(location.search.indexOf('retUrl') != -1){
                       // 有传参, 将参数地址获取, 跳回去
                  // "?retUrl=http://localhost:3000/front/product.html?productId=8"
                    var retUrl = location.search.replace('?retUrl=','');
                     // 得到地址, 跳回去
                    location.href = retUrl;
                }
                else{
                    location.href = "user.html";
                }
            }
        }
    })
   })
})