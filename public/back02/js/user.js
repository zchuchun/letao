
$(function(){
    var currentPage = 1;
    var pageSize = 5;
    render();
    function render(){
        $.ajax({
            type:'get',
            url:'/user/queryUser',
            dataType:'json',
            data:{
                page:currentPage,
                pageSize:pageSize,
            },
            success:function(info){
                console.log(info);
                var str = template('tmp',info);
                $('tbody').html(str);
                
            }
        })
    }
})