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

$(window).on( 'scroll', function(){
    var windowTop = $(window).scrollTop();
    $( "section.start" ).each(function() {
    	if(windowTop >= $(this).offset().top){
      	$(this).find('.piggy-icon').addClass("fixed").removeClass('fixedStart');
      }else{
        $(this).find('.piggy-icon').addClass('fixedStart');
      }
      if(windowTop >= $(this).offset().top + 350){
      	$(this).find('.piggy-icon').addClass("fixedBottom");
      }else{
        $(this).find('.piggy-icon').removeClass("fixedBottom");
      }
    });
});
