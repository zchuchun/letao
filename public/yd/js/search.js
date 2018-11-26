

$(function(){


    render();
    // 从本地获取历史记录
   function getHistory(){
        var jsonStr = localStorage.getItem('search_list') || '[]';
        var arr = JSON.parse(jsonStr);
        return arr;
   }

   function render(){
       var arr = getHistory();
    //    console.log(arr);
       var htmlStr = template('tmp',{list:arr});
       $('.history').html(htmlStr);
   }


//    清空记录
    $('.history').on('click','.clear',function(e){

        mui.confirm("你确定要清空历史纪录吗？","温馨提示",['取消','确认'],function(e){
            // console.log(e);
            if(e.index===1){
                localStorage.removeItem('search_list');
                render();
            }
        })
        
    })



    // 删除单条历史记录
    $(".history").on('click','.del',function(){
        var index = $(this).data('id');
        var arr = getHistory();
        arr.splice(index,1);
        // console.log(arr);
        var jsonStr = JSON.stringify(arr);
       localStorage.setItem('search_list',jsonStr);
        render();
    })


    // 添加历史纪录

    $('.btn_search').click(function(){
       var key =  $('#search').val().trim();

       if(key === ''){
        mui.toast('请输入关键词') ;
        return;
       }
       var arr = getHistory();
    //    如果有重复项需要删除重复项

        var index = arr.indexOf(key);
        if(index !== -1){
            arr.splice(index,1);
        }
        // 如果长度大于10，删除最后一个
        if(arr.length >= 10){
            arr.pop();
        }
       arr.unshift(key);
       var jsonStr = JSON.stringify(arr);
       localStorage.setItem('search_list',jsonStr);
       render();
       $('#search').val('');

       location.href = "search_list.html?key="+key;
    })

})