// 渲染数据
$.ajax({
    async: true, // 设置异步 or 同步
    type: 'get', //请求数据的方式。类型 get  post
    dataType: 'json',
    url: './json/list.json', //请求的后台地址
    //请求成功的回调函数
    success: function (data) {
        var arrText = doT.template($("#arraystmpl").text());
        $("#aplys").html(arrText(data));
    },
    error: function (err) {
       throw err;
    }
});
// 点击事件

var $formLi = $('.form li');
var $someListLi = $('.pull-list > li');
$someListLi.hide();
$formLi.on("click",function () {
    var index = $(this).index();
    if ($(this).find("a").hasClass("active")) {
        $(this).find("a").removeClass("active");
        $(this).find("i").removeClass("active");
        $someListLi.eq(index).hide();
        $(".hidea").hide();
    }else{
        $formLi.each(function () {
            $formLi.find("a").removeClass("active");
            $formLi.find("i").removeClass("active");
            $someListLi.hide();
        });
        $(this).find("a").addClass("active");
        $(this).find("i").addClass("active");
        $(".hidea").show();
        $someListLi.eq(index).show();
    }
    $(".hidea").on("tap",function () {
        $formLi.find("a").removeClass("active");
        $formLi.find("i").removeClass("active");
        $someListLi.eq(index).hide();
        $(".hidea").hide();
    });
});






