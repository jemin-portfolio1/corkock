$(function(){
    $('.wrap a:nth-child(1)').click(function(){
        $('.wine_main img:nth-child(2), .wine_main img:nth-child(3), .wine_main img:nth-child(4)').fadeOut();//hide()
    });
    $('.wrap a:nth-child(2)').click(function(){
        $('.wine_main img:nth-child(3), .wine_main img:nth-child(4)').fadeOut();//hide()
        $('.wine_main img:nth-child(2)').fadeIn();
    });
    $('.wrap a:nth-child(3)').click(function(){
        $('.wine_main img:nth-child(2), .wine_main img:nth-child(4)').fadeOut();//hide()
        $('.wine_main img:nth-child(3)').fadeIn();
    });
    $('.wrap a:nth-child(4)').click(function(){
        $('.wine_main img:nth-child(2), .wine_main img:nth-child(3)').fadeOut();//hide()
        $('.wine_main img:nth-child(4)').fadeIn();
    });
});