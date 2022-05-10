

$(function(){
    $('#semi_info').click(function(){
        $('#info').slideToggle();
        
    });
});

$(function(){

    $('.sub_btn1').click(function(){
        $('.btn').removeClass('active');
        $(this).addClass('active');
        $('.all').fadeIn();
        $('.pro_normal').hide();
        $('.kids_family').hide();
        $('.normal_family').hide();
        $('.card').hide();
    })
    $('.sub_btn2').click(function(){
        $('.btn').removeClass('active');
        $(this).addClass('active');
        // this는 자신이 지금 클릭한 요소를 말함
        $('.pro_normal').fadeIn();
        $('.all').hide();
        $('.kids_family').hide();
        $('.normal_family').hide();
        $('.card').hide();
    })
    $('.sub_btn3').click(function(){
        $('.btn').removeClass('active');
        $(this).addClass('active');
        $('.kids_family').fadeIn();
        $('.pro_normal').hide();
        $('.all').hide();
        $('.normal_family').hide();
        $('.card').hide();
    })
    $('.sub_btn4').click(function(){
        $('.btn').removeClass('active');
        $(this).addClass('active');
        $('.normal_family').fadeIn();
        $('.pro_normal').hide();
        $('.kids_family').hide();
        $('.all').hide();
        $('.card').hide();
    })
    $('.sub_btn5').click(function(){
        $('.btn').removeClass('active');
        $(this).addClass('active');
        $('.card').fadeIn();
        $('.pro_normal').hide();
        $('.kids_family').hide();
        $('.normal_family').hide();
        $('.all').hide();
    })

})


function onday(){
    window.location.href='#main'
}
function oneyear(){
    window.location.href='#main2'
}
function promo(){
    window.location.href='#main4'
}

$(window).scroll(  
    function(){  
        if($(window).scrollTop() > 350){  
            $('.quickmenu').addClass("fix");  
        }else{  
            $('.quickmenu').removeClass("fix");  
        }  
    }  
);  



// var val = document.getElementsByClassName('sub_btn1').value
//     docuement.getElementsByClassName('sub_btn1').addEventListener('click', function(){
//     })


// let sub_btn1 = document.querySelector('.sub_btn1');
// let sub_btn2 = document.querySelector('.sub_btn2');
// let sub_btn3 = document.querySelector('.sub_btn3');
// let sub_btn4 = document.querySelector('.sub_btn4');
// let sub_btn5 = document.querySelector('.sub_btn5');

// sub_btn1.addEventListener('click',function(){
//     sub_btn1.classList.toggle('flipped')
// })