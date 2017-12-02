$(window).load(function() {
//  setTimeout(function() {
    $('.preloader').fadeOut();
//  }, 5000);

  $('img.lazyload').load(function() {
    $(this).parent().css('height', 'auto');
    $('.picture-grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });
  });

  $("img.lazyload").lazyload();

  $('.icon-container').on( 'click', '.col', function() {
    var filterValue = $(this).find('.piggy-icon').data('filter');
    $('.picture-grid').isotope({ filter: filterValue });
  });
});

$(document).ready(function() {
  $('.image-container-mainpage').height($(window).height());

  $('.show-all-grid').click(function() {
    $('.picture-grid').isotope({ filter: '*' });
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
