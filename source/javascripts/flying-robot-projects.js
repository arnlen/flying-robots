$(function() {

  // -------------------------------------------------------------
  // HOME PAGE

  // Click to scroll
  $('.scroll').on('click', function() {
    $('html,body').animate({
      scrollTop: $('.home-field').offset().top},
      'slow');
  });

});