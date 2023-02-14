
(function($) {
    "use strict";
    if ($(window).width() > 768) {
        $(window).scroll(function(){
            if ($(window).scrollTop() > 0) {
                $('header').addClass('fixed-header');
            }
            else {
                $('header').removeClass('fixed-header');
            }
        });
    }

    $(document).ready(function() {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }); 

})(jQuery);