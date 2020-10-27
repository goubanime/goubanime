$(document).ready(function() {

  $(window).scroll(function () { 

    // console.log($(window).scrollTop());

    if ($(window).scrollTop() > 250) {
      $('#nav_bar').addClass('fixed-top');
    }

    if ($(window).scrollTop() < 251) {
      $('#nav_bar').removeClass('fixed-top');
    }
  });
});


$('.modal.stop-video-on-close').on('hidden.bs.modal', function(e) {
    $('.video-to-stop', this).each(function() {
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    });
})