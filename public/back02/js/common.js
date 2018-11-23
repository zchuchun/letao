
$(document).ajaxStart(function(){
    NProgress.start();
})

$(document).ajaxStop(function(){
   setTimeout(function(){
    NProgress.done();
   },500)
})

$(function(){
    $('.i_right').click(function(){
        $("#exitModal").modal("show");
    })

    $(".exit").click(function(){
        $.ajax({
            type:'get',
            url:'/employee/employeeLogout',
            dataType:'json',
            success:function(info){
                if(info.success){
                    $("#exitModal").modal("hide");
                    location.href = "login.html";
                }
            }
        })
    })

    $('.i_left').click(function(){
        $(".aside").toggleClass("special");
        $(".main").toggleClass("special");
        $(".main .top").toggleClass("special");

    })


    $('.toggle').click(function(){
        $('.cate').stop().slideToggle();
    })
})
