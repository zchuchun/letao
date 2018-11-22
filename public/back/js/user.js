


$(function(){

    var currentPage =1;
    var pageSize = 5;
    $.ajax({
        type: "get",
        url: "/user/queryUser",
        data: {
          page: currentPage,
          pageSize: pageSize
        },
        dataType: "json",
        success: function( info ) {
          console.log( info );

          var str = template("tmp",info);
          $('tbody').html(str);
        }
    })
})