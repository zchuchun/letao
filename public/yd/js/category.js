
$(function(){
    var id;
    render();
    function render(){
        $.ajax({
            type:'get',
            url:'/category/queryTopCategory',
            dataType:'json',
            success:function(info){
                console.log(info);
                var str = template('leftTmp',info);
                $('.cate').html(str);
                renderId(info.rows[0].id)
                
            }
        })
    }


    function renderId(id){
        $('.cate a').removeClass('active');
        $(this).addClass('active');
        $.ajax({
            type:'get',
            url:'/category/querySecondCategory',
            dataType:'json',
            data:{
                id:id,
            },
            success:function(info){
                console.log(info);
               var htmlStr = template('rightTmp',info);
               $('.cate2').html(htmlStr);
            }

        })
       }
    $('.cate').on('click','a',function(){
        id = $(this).data("id");
      renderId(id);
    })
})