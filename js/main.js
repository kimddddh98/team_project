$(function(){
    $(window).scroll(function(){
        var video=document.getElementById("vi").clientHeight;
        var height=video-420;
        var max= document.getElementsByTagName("body")[0].clientHeight; 
        var scroll=$(window).scrollTop();
        if(scroll>height){
            $("#container").css("background","#fff");
            $(".mainmenu>li>a").css("color","#333");
            $(".sub>li>a").css("color","#333");
            $(".sub").css("background","#fff");
            $("#search>div a").css("color","#666");
        }
        else{
            $("#container").css("background","none");
            $(".mainmenu>li>a").css("color","#fff");
            $(".sub>li>a").css("color","#fff");
            $(".sub").css("background","none");
            $("#search>div a").css("color","#fff");
        }
    })
    $("#searchfour").click(function(){
        $(".hide").hide();
        $("#hidesearch").show();
        $("#search>div").css("border","none");
        $("#search").css("justify-content","flex-end");
    });
    $("#close").click(function(){
        $(".hide").show();
        $("#hidesearch").hide();
        $("#search>div").css("border-right","1px solid #000");
        $("#searchfour").css("border-right","none");
        $("#search").css("justify-content","space-between");
    });

    $("#paradeone").hover(function(){
        $("#paradetwo").css("opacity","0.5");
        $("#paradethree").css("opacity","0.5");
        $("#paradeone p").fadeIn();
        $("#paradeone").css("animation-name","parade");
        $("#paradeone").css("animation-duration","1.5s");
        $("#paradeone").css("animation-fill-mode","both");

        // $(".pimg").css("animation-iteration-count","infinite");


    },function(){
        $("#paradetwo").css("opacity","1");
        $("#paradethree").css("opacity","1");
        $("#paradeone p").hide();
        $("#paradeone").css("animation","none");

        // $(".pimg").css("height","450px");


    }
    );
    $("#paradetwo").hover(function(){
        $("#paradeone").css("opacity","0.5");
        $("#paradethree").css("opacity","0.5");
        $("#paradetwo p").show();
        $("#paradetwo").css("animation-name","parade");
        $("#paradetwo").css("animation-duration","1.5s");
        $("#paradetwo").css("animation-fill-mode","both");


    },function(){
        $("#paradeone").css("opacity","1");
        $("#paradethree").css("opacity","1");
        $("#paradetwo p").hide();
        $("#paradetwo").css("animation","none");


    }
    );
    $("#paradethree").hover(function(){
        $("#paradeone").css("opacity","0.5");
        $("#paradetwo").css("opacity","0.5");
        $("#paradethree p").show();
        $("#paradethree").css("animation-name","parade");
        $("#paradethree").css("animation-duration","1.5s");
        $("#paradethree").css("animation-fill-mode","both");


    },function(){
        $("#paradetwo").css("opacity","1");
        $("#paradeone").css("opacity","1");
        $("#paradethree p").hide();
        $("#paradethree").css("animation","none");


    }
    );

    
});

var time=new Date();
var count= new Date(time.getFullYear(),time.getMonth(),time.getDate(),22,00,00);
var ot=new Date(time.getFullYear(),time.getMonth(),time.getDate(),10,00,00);

var x= setInterval(function(){
var now= new Date().getTime();
var distance=count-now;
var sss=ot-now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
if(hours<10){hours="0"+hours}
if(minutes<10){minutes="0"+minutes}
if(seconds<10){seconds="0"+seconds}
document.getElementById('hour').innerHTML=hours;
document.getElementById('min').innerHTML=minutes;
document.getElementById('sec').innerHTML=seconds;
document.getElementById('open').innerHTML="금일 남은 운영시간";

if(now<ot){

    var days = Math.floor(sss / (1000 * 60 * 60 * 24));
    var hours = Math.floor((sss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((sss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((sss % (1000 * 60)) / 1000);
    if(hours<10){hours="0"+hours}
    if(minutes<10){minutes="0"+minutes}
    if(seconds<10){seconds="0"+seconds}
    document.getElementById('hour').innerHTML=hours;
    document.getElementById('min').innerHTML=minutes;
    document.getElementById('sec').innerHTML=seconds;
    document.getElementById('open').innerHTML="금일 오픈까지 남은시간";

}
if(distance<0){
    clearInterval(x);
    document.getElementById('timer').innerHTML="금일 마감"
}
})