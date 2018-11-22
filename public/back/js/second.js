

$(function(){
    var currentPage = 1;
    var pageSize = 5;

    render();
    function render(){
        $.ajax({
            type:'get',
            url:'/category/querySecondCategoryPaging',
            dataType:'json',
            data:{
                page:currentPage,
                pageSize:pageSize
            },
            success:function(info){
                // console.log(info);
                var str = template("secondTmp",info);
                $("tbody").html(str);

                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion:3,
                    currentPage:info.page,
                    totalPages:Math.ceil(info.total/info.size),
                    onPageClicked:function(a,b,c,page){
                        currentPage = page;
                        render();
                    }
                })
            }
        })
    }



//点击添加按钮弹出模态框，发送ajax渲染下拉菜单
    $(".addcate").click(function(){
        $("#secondModal").modal("show");

        $.ajax({
            type:'get',
            url:'/category/queryTopCategoryPaging',
            data:{
                page:1,
                pageSize:100,
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlStr = template("cateTmp",info);
                $('.dropdown-menu').html(htmlStr);
            }
        })
    })

//给下拉菜单添加选中功能
$(".dropdown-menu").on("click",'a',function(){
    var txt = $(this).text();
    $('.cate-text').text(txt);
})

})