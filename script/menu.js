$(function(){
    $('.nav> li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav> li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });
    $('.search_nav> li').mouseenter(function(){
        $(this).children('.search_sub').stop().slideDown();
    });
    $('.search_nav> li').mouseleave(function(){
        $(this).children('.search_sub').stop().slideUp();
    });
    $('.number_nav> li').mouseenter(function(){
        $(this).children('.number_sub').stop().slideDown();
    });
    $('.number_nav> li').mouseleave(function(){
        $(this).children('.number_sub').stop().slideUp();
    });
});