$(window).load(function() {
    $('.preloader').fadeOut();
});

$(document).ready(function() {
  $(".image-grid, .sub").lightGallery({selector: 'a'});

  $('.image-container-mainpage').height($(window).height());

  $('.icon-container .show-all-grid').click(function() {
    $('.image-grid .img-fluid').fadeIn();
  });
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
