$(window).load(function() {
//  setTimeout(function() {
    $('.preloader').fadeOut();
//  }, 5000);
});

$(document).ready(function() {
  $('.image-container-mainpage').height($(window).height());

  $('.icon-container .piggy-icon').click(function() {
    var selectedPiggy = '.'+$(this).attr('class').split(' ')[1];

    $('.image-grid .img-fluid').addClass('wow-removed').removeClass('wow').removeClass('fadeInUp');
    $('.image-grid .img-fluid').siblings().not(selectedPiggy).fadeOut();
    $('.image-grid .img-fluid').siblings(selectedPiggy).fadeIn();
  });

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

const imageLightbox = require('./imageLightbox');
imageLightbox.init();
