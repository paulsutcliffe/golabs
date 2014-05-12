$(document).ready(function() {
  $('.wrapper').hide();
  $('.button').click(function(){
    $('.wrapper').animate({
        height: "toggle",
        opacity: "toggle"
              }, 1500, function() {
                  // Animation completeaa
              });           
  });
});
