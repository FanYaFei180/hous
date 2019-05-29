$(".section-dl>a").on("click",function () {
    $(".dow").show();
    $(".clo").on("click",function () {
        $(".dow").hide();
    });
    $(".but").on("click",function () {
   /*     var telephone = $(".tel").val();
        var telephone1 = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
        if (!telephone1.test(telephone)) {
            $(".tel").css("border", "1px solid red");
            return false;
        }else{
            $(".tel").css("border", "1px solid #ccc");
        }

        var password = $(".pas").val();
        var password1 = /^[a-zA-Z0-9]{4,10}$/;
        if (!password1.test(password)) {
            $(".psw1").css("border", "1px solid red");
            return false;
        } else {
            $(".psw1").css("border", "1px solid #ccc");
        }*/
        $.ajax({
            url:"https://api.dsp.grandartisans.cn/v1/api/test/login",
            type:"POST",
            dataType:"json",
            data:{
                userName:$(".tel").val(),
                password:$(".pas").val()
            },
            success:function (data) {
                console.log(data);
                if (data.success===true) {
                    setTimeout(function () {
                        window.location.href="./index.html"
                    },1000)
                }
            }
        })


    })






})