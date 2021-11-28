// Slowly make .scrolldown & more... disapear when scrolling.
$(window).scroll(function(){
    $(".scrolldown").css("opacity", 1 - $(window).scrollTop() / 1100);
  });

$(window).scroll(function(){
    $(".sidebyside").css("opacity", 1 - $(window).scrollTop() / 800);
});

$(window).scroll(function(){
    $(".header").css("opacity", 1 - $(window).scrollTop() / 90);
});

$(window).scroll(function(){
    $(".content-section1").css("opacity", 0 + $(window).scrollTop() / 1000);
});
//end

//tooltips
$(document).ready(function(){
    $.protip();
});

var el = $('.logo');
el.protipSet({
    trigger: 'hover'
});

var el2 = $('.logo-mobile');
el2.protipSet({
    trigger: 'hover'
});
//end of tooltips

//particles.js
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'config/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

// Smooth <a href="#..."> scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//redirect
$(document).ready(function() {
    $("#projects").click(function(){
        $('body').fadeOut(1000);
        setTimeout(function(){
            window.location.href = "https://github.com/auroraauwu?tab=repositories";
       }, 500);
    }); 
});

function bingchilling() {
    window.location.href = "https://www.youtube.com/watch?v=0GeQVtZ6Rd4";
}