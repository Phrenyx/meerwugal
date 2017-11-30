$(window).load(function() {
//  setTimeout(function() {
    $('.preloader').fadeOut();
//  }, 5000);
});

$(document).ready(function() {
  $('.image-container-mainpage').height($(window).height());
});

$('.wrapper-menu').click(function() {
  $(this).toggleClass('open');
  $('.main-menu').fadeToggle();
});

$('#carrot').click(function() {
  $('html,body').animate({
        scrollTop: $(window).scrollTop() + $('.image-container-mainpage').height()
    }, 800);
});
