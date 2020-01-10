$(document).ready(function(){
    $('a').click(function(){
        $('a').removeClass("active");
        $(this).addClass("active");
    });
    $('#myCarousel').carousel({
      interval: 4000
    })  
  });

  
