
const scrollClass = function(){

    var minScrollDist = 1;
    var scrolledClass = 'window-scrolled'

    $(window).scroll(function(){
        if ($(this).scrollTop() > minScrollDist) {
        $('body').addClass(scrolledClass);
        } else {
        $('body').removeClass(scrolledClass);
        }
    });

};

scrollClass();
