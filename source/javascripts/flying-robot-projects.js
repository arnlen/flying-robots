$(function() {

  $(".scroll-button").on('click', function() {
    $('html,body').animate({scrollTop: $(".home-field").offset().top}, 800);
  });

});