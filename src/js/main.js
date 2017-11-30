$(window).load(function() {
//  setTimeout(function() {
    $('.preloader').fadeOut();
//  }, 5000);
});

$('.wrapper-menu').click(function() {
  $(this).toggleClass('open');
  $('.main-menu').fadeToggle();
});

$('#carrot').click(function() {
  $('html,body').animate({
        scrollTop: $(window).scrollTop() + $('.image-container-mainpage').height()
    });
});
