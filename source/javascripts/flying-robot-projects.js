$(function() {

  // -------------------------------------------------------------
  // HOME PAGE

  var animationTime = 200,
      homeIcones = [".balloon", ".zeppelin", ".plane", ".drone", ".rocket"];

  function homePageLoadingAnimation(array) {
    if (array.length > 0) {
      $('.steps-icons-container').find(array[0]).animate({
        opacity: 1
      }, animationTime, function() {
        array.shift();
        homePageLoadingAnimation(array);
      });
    }
  }

  homePageLoadingAnimation(homeIcones);

  // Sorry about the following code...
  // I know, it's a shame. I'll refactor this "quick & horrible dirty" thing soon...

  $('.steps-icons-container').find('.balloon').mouseover(function() {
    $( this ).find('.hover-flag').addClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.balloon').addClass('visible');
  });
  $('.steps-icons-container').find('.balloon').mouseout(function() {
    $( this ).find('.hover-flag').removeClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.balloon').removeClass('visible');
  });

  $('.steps-icons-container').find('.zeppelin').mouseover(function() {
    $( this ).find('.hover-flag').addClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.zeppelin').addClass('visible');
  });
  $('.steps-icons-container').find('.zeppelin').mouseout(function() {
    $( this ).find('.hover-flag').removeClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.zeppelin').removeClass('visible');
  });

  $('.steps-icons-container').find('.plane').mouseover(function() {
    $( this ).find('.hover-flag').addClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.plane').addClass('visible');
  });
  $('.steps-icons-container').find('.plane').mouseout(function() {
    $( this ).find('.hover-flag').removeClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.plane').removeClass('visible');
  });

  $('.steps-icons-container').find('.drone').mouseover(function() {
    $( this ).find('.hover-flag').addClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.drone').addClass('visible');
  });
  $('.steps-icons-container').find('.drone').mouseout(function() {
    $( this ).find('.hover-flag').removeClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.drone').removeClass('visible');
  });

  $('.steps-icons-container').find('.rocket').mouseover(function() {
    $( this ).find('.hover-flag').addClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.rocket').addClass('visible');
  });
  $('.steps-icons-container').find('.rocket').mouseout(function() {
    $( this ).find('.hover-flag').removeClass('visible');
    $( this ).parent().parent().find('.step-descriptions-container').find('.rocket').removeClass('visible');
  });

});