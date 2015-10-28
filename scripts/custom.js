// var exceptions = $('.navigation__sublinks');

// exceptions.click(function(e){
//     e.preventDefault();
//     return false;
// });


$('.burger').click(function() {
    $('.navigation__link').delay(300).queue(function(next) {
        $('.navigation__link').removeClass('is-active');
        next();
    });
    if ($('.navigation__links').hasClass('is-active')) {
        $('.navigation__links').removeClass('is-active').addClass('not-active').delay(400).queue(function(next) {
            $('.navigation__links').removeClass('not-active');
            next();
        });
    }
    else {
        $('.navigation__links').addClass('is-active');
        $('.navigation__link').removeClass('is-active, not-active, inactive');
    }
});

$('.navigation__link').click(function() {
    if ($(this).hasClass('is-active')) {
        $('.navigation__link').removeClass('inactive');
        $(this).removeClass('is-active').addClass('not-active').delay(300).queue(function(next) {
            $(this).removeClass('not-active');
            next();
        });
    }
    else {
        $('.navigation__link').addClass('inactive');
        $(this).addClass('is-active');
    }
});
$('.navigation__sublink, .navigation__link.link').click(function() {
    $('.navigation__links').removeClass('is-active').addClass('not-active').delay(400).queue(function(next) {
        $('.navigation__links').removeClass('not-active');
        next();
    });
});
$('.chapter__container').click(function() {
    if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
    }
    else {
        $('.chapter__container').removeClass('is-active');
        $(this).addClass('is-active');
    }
});







$(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $('.navigation__links').removeClass('is-active');
            $('.navigation__link').removeClass('is-active');
        } 
    }).resize();
});
