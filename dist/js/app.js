"use strict";
// helpers function
function get(selector, all = false) {
	if (all) return document.querySelectorAll(selector);
	return document.querySelector(selector);
}

Object.prototype.on = function (event, cb) {
	this.addEventListener(event, cb);
};

// Open and close menu
const toggleMenuBtn = get(".burger-menu");
const menu = get(".menu-container");

toggleMenuBtn.on("click", () => {
	toggleMenuBtn.classList.toggle("open");
	const isOpen = toggleMenuBtn.classList.contains("open");
	isOpen ? menu.classList.add("active") : menu.classList.remove("active");
});

// Select language
const selectLang = get(".select-lang");
const selectedLang = get(".selected-lang span");
const langOptions = get(".lang-options");

selectLang.on("click", (e) => {
	if (e.target.tagName === "LI") {
		selectedLang.innerText = e.target.dataset.lang;
	}
	selectLang.classList.toggle("open");
});
