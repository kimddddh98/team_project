function prev(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left',-800); // $('.slide').css({marginLeft:-1000});
    $('.slide').stop().animate({marginLeft:0},800);
    }
    
    function next(){
    $('.slide').stop().animate({marginLeft:-800}, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
    });
    
    }
    
    function slide(){
    $('.slide').stop().animate({marginLeft:-800}, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
    });
    }
    
    
    $('.prev').click(function(){
    prev();
    });
    
    $('.next').click(function(){
    next();
    
    });