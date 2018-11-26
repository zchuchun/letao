

$(function(){
    var obj = getSearch();
    var key = obj["key"];
    $('#search').val(key);


$('.product').html('<div class="box"></div>')
render();
  
    
  function render(){

    var proObj = {};
    proObj["page"] =1;
    proObj["pageSize"] = 100;
    proObj["proName"] = $('#search').val();

    var $current = $('.sort a.current');
  
    if($current.length ===1){
        var sortName = $current.data('type');
        var sortValue = $current.find('i').hasClass('fa-angle-down') ? 2 : 1;
        proObj[sortName] = sortValue;
    }
    
    setTimeout(function(){
        $.ajax({
            type:'get',
            url:'/product/queryProduct',
            data:proObj,
            dataType:'json',
            success:function(info){
                console.log(info); 
                var str = template('tmp',info);
                $('.product').html(str);
            }
          })
    },1000);
  }
    

  $("[data-type]").click(function(){

    if($(this).hasClass('current')){
        $(this).find("i").toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    }else{
        $(this).addClass('current').siblings().removeClass("current");
    }
    $('.product').html('<div class="box"></div>')
    render();
  
  })

  $('.btn_search').click(function(){
    $('.product').html('<div class="box"></div>')
      render();
   
  })

  $('.product').on('click','a',function(){
      var id = $(this).data("id");
 
      location.href = 'product.html?productId='+id;
  })
})