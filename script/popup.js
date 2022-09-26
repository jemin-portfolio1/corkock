$(function(){
    $('.wrap a').click(function(){
        $('.popup').fadeIn();//show()
    });
    $('.close a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});