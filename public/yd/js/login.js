

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
                location.href = "user.html";
            }
        }
    })
   })
})