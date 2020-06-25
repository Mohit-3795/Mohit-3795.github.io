$(document).ready(function(){
    $('.js--scroll-to-javascript').click(function (){
        $('html,body').animate({scrollTop: $('.js--section-javascript').offset().top},1000)
    })

    $('.js--scroll-to-python').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-python').offset().top},1000)
    })

    $('.js--scroll-to-top').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-top').offset().top},700)
    })


})