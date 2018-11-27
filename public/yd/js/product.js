$(function(){
    var obj = getSearch();
    var id = obj["productId"];
    // console.log(id);
    $.ajax({
        type:'get',
        url:'/product/queryProductDetail',
        dataType:'json',
        data:{
            id:id,
        },
        success:function(info){
            console.log(info);
            var str = template('tmp',info);
            $(".mui-scroll").html(str);
            
             //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
        interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
        }); 


        // 初始化数字框
        mui(".mui-numbox").numbox()
       
        }

    })

    //给尺码添加可选功能
    $('.mui-scroll').on('click','.lt_size span',function(){
        $(this).addClass('current').siblings().removeClass('current');
    })
    

    // 加入购物车功能

   
    $('#addCart').click(function(){
        var size = $('.mui-scroll span.current').text();
        var num = $('.mui-numbox-input').val();
        
        if(size === null){
            mui.toast('请选择尺码');
            return;
        }

        $.ajax({
        type:'post',
        url:'/cart/addCart',
        dataType:'json',
        data:{
            productId:id,
            size:size,
            num:num
        },
        success:function(info){
            console.log(info);
            if(info.error === 400){
                location.href = "login.html?retUrl="+location.href;
                return;
            }
            if(info.success){
                mui.toast('添加成功','温馨提示',['去购物车','继续浏览'],function(e){
                    if(e.index===0){
                        location.href = 'cart.html';
                    }
                })
            }
        }
    })
    
    })
    
})