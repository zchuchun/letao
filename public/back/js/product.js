

$(function(){
    var currentPage = 1;
    var pageSize = 5;

    render();
    function render(){
        $.ajax({
            type:'get',
            url:'/product/queryProductDetailList',
            data:{
                page:currentPage,
                pageSize:pageSize,
            },
            dataType:'json',
            success:function(info){
                // console.log(info);
                var str = template('tmp',info);
                $('tbody').html(str);

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


    $('.add').click(function(){
        $("#addModal").modal("show");

        $.ajax({
            type:'get',
            url:'/category/querySecondCategoryPaging',
            data:{
                page:1,
                pageSize:100,
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlStr = template('addTmp',info);
                $('.dropdown-menu').html(htmlStr);
            }
        })
    })


    $('.dropdown-menu').on('click','a',function(){
        var txt = $(this).text();
        $('.changeCate').text(txt);
        var id = $(this).data("id");
        $('[name="brandId"]').val(id);

        $('#form').data("bootstrapValidator").updateStatus('brandId','VALID');
    })
    


    var arr = [];
    $('#fileupload').fileupload({
        dataType:'json',
        done:function(e,data){
            console.log(data);
            var picObj = data.result;

           arr.unshift(picObj);
           var picUrl = picObj.picAddr;
           $(".imgBox").prepend('<img src="'+ picUrl +'" style="width:100px" >')
            
           if(arr.length > 3){
            //    console.log(arr.length);
               arr.pop();
               $('.imgBox img:last-of-type').remove();

           }

           if(arr.length ===3){
               $('#form').data("bootstrapValidator").updateStatus('picStatus','VALID');
           }
        }
    })


    //配置表单校验
    $('#form').bootstrapValidator({
        
    })
})