"use strict";
// helpers function
function get(selector, all = false) {
	if (all) return [...document.querySelectorAll(selector)];
	return document.querySelector(selector);
}

// Help method to add events easier
Object.prototype.on = function (event, cb) {
	this.addEventListener(event, cb);
	return this;
};

// css method for adding inline style faster for example
/*
	element.css({
		color: "#ffd900",
		width: "100px"
	})
*/
Object.prototype.css = function (styles) {
	for (let [property, value] of Object.entries(styles)) {
		this.style[property] = value;
	}
	return this;
};

// Debounce function to help as avoid unnecessary events firing
function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
}

// Open and close menu
const toggleMenuBtn = get(".burger-menu");
const menu = get(".menu-container");

toggleMenuBtn.on("click", () => {
	toggleMenuBtn.classList.toggle("open");
	const isOpen = toggleMenuBtn.classList.contains("open");
	if (isOpen) {
		menu.classList.add("active");
	} else {
		menu.classList.remove("active");
	}
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

// Hide the placeholder when the input is focused
function hidePlaceholder() {
	get("input[placeholder]", true).forEach((input) => {
		const placeholder = input.getAttribute("placeholder");
		input.on("focus", () => {
			input.setAttribute("placeholder", "");
		});
		input.on("blur", () => {
			input.setAttribute("placeholder", placeholder);
		});
	});
}

// Show and hide password
function showAndHidePass() {
	get(".show-and-hide-pass", true).forEach((el) => {
		el.on("click", (e) => {
			const targetInput = get(e.currentTarget.dataset.target);
			const currentType = targetInput.getAttribute("type");
			const type = currentType === "password" ? "text" : "password";
			targetInput.setAttribute("type", type);
		});
	});
}

// Add dynamic date on the footer
const footerDate = get("#current-year");
if (footerDate) {
	footerDate.innerText = new Date().getFullYear();
}

function reversStr(_str) {
	let str = _str.replace(/\n/g, "");
	let revStr = "";
	for (let i = str.length - 1; 0 <= i; i--) {
		revStr += str[i];
	}
	return revStr;
}
