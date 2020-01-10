$(document).ready(function(){
    $('nav ul a').click(function(){
        $(this).addClass("active");
    });
    $('#myCarousel').carousel({
      interval: 4000
    })  
  });

  
