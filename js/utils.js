/**
 * Wrapper around document.querySelector and document.querySelectorAll
 *
 * @param {string} query - the query for document.querySelector or document.querySelectorAll
 * @return {HTMLElement || NodeList} the result
 */
const q = (query) => document.querySelector(query);
const qq = (query) => document.querySelectorAll(query);

/**
 * Get offset possition of the element
 *

/**
 * update navbar's box position
 *
 * @param {HTMLElement} elm - the hoverd or the active link in the navbar
 */
const boxLink = (elm) => {
	box.style.width = `${elm.clientWidth}px`;	
	box.style.height = `${elm.clientHeight}px`;	
	box.style.left = `${window.innerWidth > 481 ? elm.offsetLeft : -481}px`;	
}

/**
 * update navbar's box position
 *
 * @param {HTMLElement} parElm - The parent element for the ripple
 */
const createRipple = (parElm) => {
	const newRipple = document.createElement("span");
	newRipple.classList.add("ripple__inner");
	parElm.appendChild(newRipple);
}
