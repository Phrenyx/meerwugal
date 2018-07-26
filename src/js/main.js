$(window).load(function() {
    $('.preloader').fadeOut();

    if(window.location.hash) {
        let scroll = $(window.location.hash).offset().top + 0;
        console.log(window.location.hash);
        $('html,body').animate({
            scrollTop: scroll + 'px'
        },1000,'swing');
    }
});

$(document).ready(function() {
    if (window.location.href.indexOf("sub.html") > -1) {
        $('a[href*="#"]').on('click',function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop:$($(this).attr('href').replace('/sub.html', '')).offset().top + 'px'
            },1000,'swing');

            $('.wrapper-menu.open').click();
        });
    }

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
