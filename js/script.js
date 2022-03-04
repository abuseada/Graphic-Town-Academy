const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("toggle-menu"),
    closeMenu = document.getElementById("close-menu");


toggleMenu.addEventListener("click",() => [
    navMenu.classList.toggle("active-menu")
])
closeMenu.addEventListener("click",() => [
    navMenu.classList.remove("active-menu")
]);

/* ======================================================================== */

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 4000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

/* ======================================================================== */
