$("#submit").on("click", function () {
    console.log(1)
    var telephone = $(".tel").val();
    var telephone1 = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    if (!telephone1.test(telephone)) {
        $(".tel").css("border", "1px solid red");
        return false;
    }else{
        $(".tel").css("border", "1px solid #ccc");
    }

    var password = $(".psw1").val();
    var password1 = /^[a-zA-Z0-9]{4,10}$/;
    if (!password1.test(password)) {
        $(".psw1").css("border", "1px solid red");
        return false;
    } else {
        $(".psw1").css("border", "1px solid #ccc");
    }
    var pass2=$(".psw2").val()
    if(pass2!==password){
        $(".psw2").css("border", "1px solid red");
        return false;
    }else{
        $(".psw2").css("border", "1px solid #ccc");
    }
    // var jsonmap={};
    // jsonmap.push({"password":$(".psw1").val()},{"userName":$(".tel").val()})
    $.ajax({
        url:"https://api.dsp.grandartisans.cn/v1/api/test/register",
        type:"POST",
        dataType:"json",
        data:{
            userName:$(".tel").val(),
            password:$(".psw1").val()
        },
        success:function (data) {
            console.log(data);
            if (data.success===true) {
                setTimeout(function () {
                    window.location.href="./register.html"
                },1000)
            }
        }
    })


});



