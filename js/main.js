$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});

var test = $('.test');

test.animate({opacity: "0"}, 500);
test.animate({opacity: "1"}, 1000);

$(document).ready(function() {
  $('.buddha').hide();
  $('.aura').hide();
  $('.wheel_container').click(function(){
    setTimeout(function() {
      $('.wheel_container').animate({opacity:"0"}, 1000);
      $('.buddha').fadeIn(8000);
      $('.aura').fadeIn(10000);
    }, 60000);
  });
})
