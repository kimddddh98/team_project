$(function () {
    $(window).scroll(function () {
        var video = document.getElementById("vi").clientHeight;
        var height = video - 300;
        var max = document.getElementsByTagName("body")[0].clientHeight;
        var scroll = $(window).scrollTop();
        if (scroll > height) {
            $("#container").css("background", "#fff");
            $(".mainmenu>li>a").css("color", "#000");
            $(".sub>li>a").css("color", "#000");
            $(".sub").css("background", "#fff");
            $("#search>div a").css("color", "#000");
        }
        else {
            $("#container").css("background", "none");
            $(".mainmenu>li>a").css("color", "#fff");
            $(".sub>li>a").css("color", "#fff");
            $(".sub").css("background", "none");
            $("#search>div a").css("color", "#fff");
        }
    })
    $("#searchfour").click(function () {
        $(".hide").hide();
        $("#hidesearch").show();
        $("#search>div").css("border", "none");
        $("#search").css("justify-content", "flex-end");
    });
    $("#close").click(function () {
        $(".hide").show();
        $("#hidesearch").hide();
        $("#search>div").css("border-right", "1px solid #000");
        $("#searchfour").css("border-right", "none");
        $("#search").css("justify-content", "space-between");
    });


    //  글로벌페어 슬라이드
    $('.prev').click(function () {
        $('.arrow li:last').prependTo('.arrow');
        $('.arrow').css('margin-left', -1100);
        $('.arrow').stop().animate({ marginLeft: 0 }, 800);
    });

    $('.next').click(function () {
        $('.arrow').stop().animate({ marginLeft: -1100 }, 800, function () {
            $('.arrow li:first').appendTo('.arrow');
            $('.arrow').css({ marginLeft: 0 });
        });
    });

    //  아메리칸 어드벤처 슬라이드
    $('.prev2').click(function () {
        $('.arrow2 li:last').prependTo('.arrow2');
        $('.arrow2').css('margin-left', -1100);
        $('.arrow2').stop().animate({ marginLeft: 0 }, 800);
    });

    $('.next2').click(function () {
        $('.arrow2').stop().animate({ marginLeft: -1100 }, 800, function () {
            $('.arrow2 li:first').appendTo('.arrow2');
            $('.arrow2').css({ marginLeft: 0 });
        });
    });


    //  매직 랜드
    $('.prev3').click(function () {
        $('.arrow3 li:last').prependTo('.arrow3');
        $('.arrow3').css('margin-left', -1100);
        $('.arrow3').stop().animate({ marginLeft: 0 }, 800);
    });

    $('.next3').click(function () {
        $('.arrow3').stop().animate({ marginLeft: -1100 }, 800, function () {
            $('.arrow3 li:first').appendTo('.arrow3');
            $('.arrow3').css({ marginLeft: 0 });
        });
    });


    //  유러피언 어드벤처
    $('.prev4').click(function () {
        $('.arrow4 li:last').prependTo('.arrow4');
        $('.arrow4').css('margin-left', -1100);
        $('.arrow4').stop().animate({ marginLeft: 0 }, 800);
    });

    $('.next4').click(function () {
        $('.arrow4').stop().animate({ marginLeft: -1100 }, 800, function () {
            $('.arrow4 li:first').appendTo('.arrow4');
            $('.arrow4').css({ marginLeft: 0 });
        });
    });


    //  주토피아
    $('.prev5').click(function () {
        $('.arrow5 li:last').prependTo('.arrow5');
        $('.arrow5').css('margin-left', -1100);
        $('.arrow5').stop().animate({ marginLeft: 0 }, 800);
    });

    $('.next5').click(function () {
        $('.arrow5').stop().animate({ marginLeft: -1100 }, 800, function () {
            $('.arrow5 li:first').appendTo('.arrow5');
            $('.arrow5').css({ marginLeft: 0 });
        });
    });

    // 버튼 스토리 이동
    $('button:nth-of-type(1)').addClass('active');

    $('button:nth-of-type(1)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story1").fadeIn();
        $(".story2").hide();
        $(".story3").hide();
        $(".story4").hide();
        $(".story5").hide();
    });

    $('button:nth-of-type(2)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story2").fadeIn();
        $(".story1").hide();
        $(".story3").hide();
        $(".story4").hide();
        $(".story5").hide();
    });

    $('button:nth-of-type(3)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story3").fadeIn();
        $(".story1").hide();
        $(".story2").hide();
        $(".story4").hide();
        $(".story5").hide();
    });

    $('button:nth-of-type(4)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story4").fadeIn();
        $(".story1").hide();
        $(".story2").hide();
        $(".story3").hide();
        $(".story5").hide();
    });

    $('button:nth-of-type(5)').click(function () {
        $("button").removeClass('active');
        $(this).addClass('active');
        $(".story5").fadeIn();
        $(".story1").hide();
        $(".story2").hide();
        $(".story3").hide();
        $(".story4").hide();
    });


});