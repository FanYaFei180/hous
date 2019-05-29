// 广告
var close=document.getElementsByClassName("close")[0];
var advertising=document.getElementsByClassName("advertising")[0]
close.onclick=function () {
    advertising.style.display="none";
}

// 热门关注
var attentions=document.getElementsByClassName("attention-");
var ul=document.getElementsByClassName("hot");
function fn(a) {
    for (var i=0; i<ul.length;i++) {
        ul[i].style="display:none";
        attentions[i].style="";
    }
    ul[a].style="display:block;";
    attentions[a].style="color: #ff8a00;border-bottom: 1px solid#ff8a00;";
}



