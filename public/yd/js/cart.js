

$(function(){


    render();
    function render(){
        $.ajax({
            type:'get',
            url:'/cart/queryCart',
            dataType:'json',
            success:function(info){
                console.log(info);
                if(info.error ===400){
                    location.href = 'login.html?retUrl='+location.href;
                    return;
                }
                var str = template('tmp',{list:info});
                $('.mui-table-view').html(str);
            }
        })
    }


    //删除功能
    $('.main').on('click','.btn_delete',function(){
        var id = $(this).data('id');

        $.ajax({
            type:'get',
            url:'/cart/deleteCart',
            data:{
                id:[id]
            },
            success:function(info){
                console.log(info);
                if(info.success){
                    render();
                }
            }
        })
    })

})