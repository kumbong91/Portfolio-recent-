window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
} //myBtn



/*
$(function(){
  $(#myBtn).click(function(e){
    $.scrollTop(this.hash ||0,1500);
    e.preventDefault();
  });
});*/


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(function(){
    $('#pfol .post').bxSlider({
      speed:800,
      slideMargin:10,
      touchEnabled: false
    });

    $('.scroll').click(function(e) {
        e.preventDefault();
        $('html').animate({scrollTop:$(this.hash).offset().top}, 500);
      });
            
      setTimeout(function(){
        $(window).resize()}, 1000);      

      $('.bg-holder').parallaxScroll({
        friction:0.3
      });


   var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


    $('.menu li a').click(function(e){
        
        $.scrollTo(this.hash ||0,1500);

        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},3000);
    });

        $('.holder').parallaxScroll({
            friction:0.3
        });

    
});


$( window ).scroll(function() {
  $( ".span" ).css( "display", "inline" ).fadeOut( "slow" );
}); 

function copy(element) {
  var $mail = $("<input>");
  $("body").append($mail);
  $mail.val($(element).text()).select();
  document.execCommand("copy");
  $mail.remove();
  alert("Copied the address: Thank you!");
}
