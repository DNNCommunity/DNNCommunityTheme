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