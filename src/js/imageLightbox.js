module.exports = {
   init: function() {
      init();
   }
}

var $modal = $('.image-modal');


function init() {
  clickEventHandler();
}


function hideModal() {
  $modal.hide();
  $("body").removeClass('no-scroll');
}

function clickEventHandler() {
  $('.image-grid img').click(function() {
    var src = $(this).attr('src');
    $modal.find('.content').html('<img alt="" src="' + src + '" />');
    $modal.fadeIn();
    $("body").addClass('no-scroll');
  });

  $('.image-modal i.fa-times, .image-modal').click(function() {
    hideModal();
  });
}
