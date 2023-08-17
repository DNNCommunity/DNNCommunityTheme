(function ($) {

    $(document).ready(function () {
        initSlider(document); // init all the slider on the page
    });
    $(document).on("opencontent.change", function (event, element) {
        initSlider(element); // init slides on module which content change
    });
    function initSlider(element) {
        $(".flexslider.flex-slider", element).each(function () {
            $(this).flexslider({
                'animationLoop': $(this).attr("data-animationloop") ? $(this).data("animationloop") : false,
                'slideshow': $(this).attr("data-slideshow") ? $(this).data("slideshow") : false,
                "slideshowSpeed": $(this).attr("data-slideshowspeed") ? $(this).data("slideshowspeed") : 7000,
                'animation': $(this).attr("data-animation") ? $(this).data("animation") : "slide",
                'touch': $(this).attr("data-touch") ? $(this).data("touch") : false,
                'controlNav': $(this).attr("data-controlnav") ? $(this).data("controlnav") : false,
                'directionNav': $(this).attr("data-directionnav") ? $(this).data("directionnav") : false,
                'sync': $(this).attr("data-sync") ? $(this).data("sync") : "",
				'smoothHeight': false
                
            });
        });
    }
}(jQuery));
