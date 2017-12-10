$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



// js a propos de moi


(function($){
    // variables
    elementWidth = $('ul').width(),
    containerWidth = $('nav').width(),
    difference = elementWidth-containerWidth,
    finalWidth = difference * 1.5,
    element = $('ul');
    
    // active on click
    $('li').on('click', function(){
      $('li').removeClass('active');
      $(this).addClass('active');
    });
    
  })(jQuery);


  //  fin js a propos de moi