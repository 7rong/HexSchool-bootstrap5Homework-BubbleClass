$(document).ready(function () {
    //go to top
    var windowHeight = $(window).height();
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > (windowHeight/1.5)) {
            $('.go-top').fadeIn();
        }else{
            $('.go-top').fadeOut();
        }
    });

    $('.go-top').on('click',function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500); 
    });

    //指定位置
    $('.scroll-top').on('click',function(e){
        e.preventDefault;
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html,body').animate({scrollTop : targetPos},500);
    })
});