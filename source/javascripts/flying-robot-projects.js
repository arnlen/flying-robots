$(function() {

  // -------------------------------------------------------------
  // HOME PAGE

  // Click to scroll
  $('.step').on('click', function() {
    $('html,body').animate({
      scrollTop: $('.home-field').offset().top},
      'slow');
  });

});