/* To avoid not being able to scroll the the end of a longer sub-menu:
	1. Make the we make the sub menu cover the window	
	2. Scroll the content (body) to the top
	3. Disable the sticky header.
*/

var menuOpenClass = "nav-dropdown-open";
var myWrapper = document.body;
var myMenu = document.getElementById("nav-desktop");
var myDropdowns = myMenu.querySelectorAll(".dropdown-toggle");

var openCount = 0; // Used to make sure the menu background does not get closed when you open another menu item

// The SubMenu is opening
const setMenuOpen = function () {
	openCount++;
	if (openCount == 1) {
		window.scrollTo({
			top: 0, 
			behavior: 'instant'
		});
		myWrapper.classList.add(menuOpenClass);
	}
}

// The SubMenu is closing
const setMenuClose = function () {
	openCount--;
	if (openCount <= 0) {
		myWrapper.classList.remove(menuOpenClass);
	}

}


myDropdowns.forEach(item => {
	item.addEventListener('show.bs.dropdown', function () {
		// Not on Mobile..
		if (mobileMenuOpen == false) {
			setMenuOpen();
		}

	});
});


myDropdowns.forEach(item => {
	item.addEventListener('hidden.bs.dropdown', function () {
		// Not on Mobile..
		if (mobileMenuOpen == false) {
			setMenuClose();
		}

	});
});



// Mobile menu Toggler
var mobileMenuOpen = false;

var navToggle = document.getElementById("navbar-toggler");


navToggle.addEventListener('click', event => {
	if (mobileMenuOpen == false) {
		setMenuOpen();
		mobileMenuOpen = true;
	} else {
		setMenuClose();
		mobileMenuOpen = false;
	}

})


document.addEventListener("DOMContentLoaded", function(){
// make it as accordion for smaller screens
if (window.innerWidth > 992) {

	document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

		everyitem.addEventListener('mouseover', function(e){

			let el_link = this.querySelector('.dropdown-toggle');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				
				el_link.classList.add('show');
				nextEl.classList.add('show');
				nextEl.setAttribute("data-bs-popper", "static");
			}

		});
		everyitem.addEventListener('mouseleave', function(e){
			let el_link = this.querySelector('.dropdown-toggle');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
				nextEl.setAttribute("data-bs-popper", "");
			}


		})
	});

}
// end if innerWidth
}); 
// DOMContentLoaded  end
// --
// Make sure a wrapper with only empty panes in it does not show when not in DNN Edit mode
// --

const markEmptyPaneRows = function (wrapper, children, clsEmpty, className){
	
	var wrappers = document.querySelectorAll(wrapper);

	wrappers.forEach(item => {

		var childrenCount = item.querySelectorAll(children).length;
		var emptyChildrenCount = item.querySelectorAll(children+clsEmpty).length;
		if(childrenCount == emptyChildrenCount){

			item.classList.add(className)

		}
	});


}

markEmptyPaneRows(".panes", ".pane", ".DNNEmptyPane", "panes-empty");

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
