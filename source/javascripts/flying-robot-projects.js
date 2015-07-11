$(function() {

  $(".scroll-button").on('click', function() {
    $('html,body').animate({scrollTop: $(".home-field").offset().top}, 800);
  });

  var animationTime = 200,
      homeIcones = [".balloon", ".zeppelin", ".plane", ".drone", ".rocket"];

  function homePageLoadingAnimation(array) {
    if (array.length > 0) {
      $( array[0] ).animate({
        opacity: 1
      }, animationTime, function() {
        array.shift();
        homePageLoadingAnimation(array);
      });
    } else {
      $( ".call-to-action-buttons" ).animate({
        opacity: 1,
        margin: "+=30px auto 0"
      }, 1200, function() {
        console.log('OK');
      });
    }
  }

  homePageLoadingAnimation(homeIcones);

});