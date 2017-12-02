module.exports = {
   init: function() {
      init();
   }
}

var $modal = $('.image-modal');


function init() {
  clickEventHandler();
}


function clickEventHandler() {
  $('.picture-grid .grid-item').click(function() {
    var src = $(this).data('src');
    $modal.find('.content').html('<img alt="" src="' + src + '" />');
    $modal.show();
  });

  $('.image-modal i.fa-times').click(function() {
    $modal.hide();
  });
}
