 //navigation
 $(function(){
    $(window).scroll(function(){
        var sub_top=document.getElementById("sub_joy").clientHeight;
        var height=sub_top-300;
        var scroll=$(window).scrollTop();
        if(scroll>height){
            $("#container").css("background","#fff");
            $(".mainmenu>li>a").css("color","#000");
            $(".sub>li>a").css("color","#000");
            $(".sub").css("background","#fff");
            $("#search>div a").css("color","#000");


        }else{
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
});

//sub_middle_menu
$(function() {
    $('.sub_middle_menu_btn1').click(function() {
        $('#sub_middle_menu a').removeClass('active'); // 클릭시 #sub_middle_menu 안에 있는 a의 class active가 없어지게 하는 내용
        $('.sub_middle_menu_btn1 a').addClass('active'); // 클릭시 .sub_middle_menu_btn1의 a가 active 되도록 하는 내용
        $("#sub_middle_attraction_wrap").fadeIn();
        $("#sub_middle_course_wrap").hide();
        $("#sub_middle_enter_wrap").hide();
        $('html,body').animate( { scrollTop : 450 }, 500 );
    });

    $('.sub_middle_menu_btn2').click(function() {
        $('#sub_middle_menu a').removeClass('active');
        $('.sub_middle_menu_btn2 a').addClass('active');
        $("#sub_middle_course_wrap").fadeIn();
        $("#sub_middle_attraction_wrap").hide();
        $("#sub_middle_enter_wrap").hide();
        $('html,body').animate( { scrollTop : 450 }, 500 );
    });
    
    $('.sub_middle_menu_btn3').click(function() {
        $('#sub_middle_menu a').removeClass('active');
        $('.sub_middle_menu_btn3 a').addClass('active');
        $("#sub_middle_enter_wrap").fadeIn();
        $("#sub_middle_attraction_wrap").hide();
        $("#sub_middle_course_wrap").hide();
        $('html,body').animate( { scrollTop : 450 }, 500 );
    });
});

//sub_middle_box_menu
$(function() {
        $("#sub_middle_attraction_grobal").hide();
        $("#sub_middle_attraction_american").hide();
        //display:flex를 적용했기 때문에 display:none 대신 hide로 숨겨둠

    $('#sub_middle_attraction_menu_btn1').click(function() {
        $("#sub_middle_attraction_all").fadeIn();
        $("#sub_middle_attraction_grobal").hide();
        $("#sub_middle_attraction_american").hide();
        $('html,body').animate( { scrollTop : 1650 }, 700 );
        //animate의 숫자는 일어나는 시간 1000=1초
        
    });


    $('#sub_middle_attraction_menu_btn2').click(function() {
        $("#sub_middle_attraction_grobal").fadeIn();
        $("#sub_middle_attraction_all").hide();
        $("#sub_middle_attraction_american").hide();
        $('html,body').animate( { scrollTop : 1650 }, 700 );
    });


    $('#sub_middle_attraction_menu_btn3').click(function() {
        $("#sub_middle_attraction_american").fadeIn();
        $("#sub_middle_attraction_all").hide();
        $("#sub_middle_attraction_grobal").hide();
        $('html,body').animate( { scrollTop : 1650 }, 700 );
    });
});

//popup
    $(function () {

        $('.hide_text').click(function () {
            $("#popup").fadeIn();
        });

        $('.close_btn').click(function () {
            $("#popup").hide();
        });
    });

//Scroll FadeIn
    $(document).ready(function () {
         $(window).scroll(function () {
            $('.sub_middle_attraction_all_box').each(function (i) {
                 var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 10;
                 var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ) {
                     $(this).animate({ 'opacity': '1' }, 500);
                  } 
                
             });
         });
    });