


$(function(){
    $(".nav>li").mouseenter(function(){
       $(this).children(".sub").stop().slideDown();
    });
    $(".nav>li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp();
    });
});





$(function(){

    AOS.init({
     duration : 1200,

    });

    });



