// check js/util.js for some custom functions

// get all constant elements
const navList = qq(".header__navbar__link");
const activeLink = q(".header__navbar__link--active");
const box = q(".header__navbar__box");
const rippleList = qq(".ripple__wrapper")
const menuToggler = q(".header__navbar__menu--left");

/**
	* Init state 
	* rerun the function again when the web is resized
	*/
const init = () => {
	// Set the position for the cover box at the position of the active link
	if (window.innerWidth > 481)
		boxLink(activeLink);
	box.style.display = "block";
}

init();
window.addEventListener("resize", init);

/**
	* Updating position of navbar's box
	*/
for (let navLink of navList) {
	// update the position of the navbar's box based on the hoverd link
	navLink.addEventListener("mouseover", () => boxLink(navLink));
	// move the box back to the active link after not hovering anymore
	navLink.addEventListener("mouseout", () => boxLink(activeLink));
}

/**
	* Setting up the burger menu
	*/
menuToggler.addEventListener("click", () => {
	menuToggler.classList.toggle("header__navbar__menu--left--open");	
});

/**
	* Setting up the ripple
	*/
for (let rippleElm of rippleList) {
	rippleElm.addEventListener("mousedown", (e) => {
		// lazy adding ripple element
		// only add the ripple on the first time click the parent element
		if (!rippleElm.querySelector('.ripple__inner')) createRipple(rippleElm);	
		const ripple = rippleElm.querySelector(".ripple__inner");
		// remove the class to restart the animation
		ripple.classList.remove('ripple__inner--active');
		// get the element area to calculate the mouse position relative to the element
		let elmArea = e.target.getBoundingClientRect();
		// expand the ripple from the clicked positio
		ripple.style.left = `${e.clientX - elmArea.left}px`;
		ripple.style.top = `${e.clientY - elmArea.top}px`;
		// run the animation
		ripple.classList.add('ripple__inner--active');
	});
}
