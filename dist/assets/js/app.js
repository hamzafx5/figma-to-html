"use strict";
// helpers function
function get(selector, all = false) {
	if (all) return document.querySelectorAll(selector);
	return document.querySelector(selector);
}

Object.prototype.on = function (event, cb) {
	this.addEventListener(event, cb);
	return this;
};

Object.prototype.css = function (styles) {
	for (let [property, value] of Object.entries(styles)) {
		this.style[property] = value;
	}
	return this;
};

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

// Open input drop down list
get(".input-drop-down").on("click", (e) => {
	e.currentTarget.classList.toggle("active");
	const selectedItem = get(".input-drop-down .selected-item span");
	if (e.target.tagName === "LI") {
		selectedItem.innerText = e.target.innerText;
	}
});

// Select location module
const locationModule = get(".select-location-module");
const closeLocationModuleBtn = locationModule.querySelector(".close-module-btn");
const openLocationModuleBtn = get(".open-map-to-select-location");

openLocationModuleBtn.on("click", () => {
	locationModule.classList.add("open");
});

closeLocationModuleBtn.on("click", () => {
	locationModule.classList.remove("open");
});

// Show and hide password
get(".show-and-hide-pass", true).forEach((el) => {
	el.on("click", (e) => {
		const targetInput = get(e.currentTarget.dataset.target);
		const currentType = targetInput.getAttribute("type");
		const type = currentType === "password" ? "text" : "password";
		targetInput.setAttribute("type", type);
	});
});

// add file inputs
get(".input-file", true).forEach((el) => {
	const input = el.querySelector(".input-icon input");
	const fileInputLabel = el.querySelector(".file-input-label");
	const browseBtn = el.querySelector(".browse-files-btn");
	browseBtn.on("click", () => {
		input.click();
	});

	input.on("change", (e) => {
		const [file] = e.target.files;
		if (!file) return;
		fileInputLabel.innerText = file.name;
		if (input.value) {
			el.classList.add("file-selected");
		}
	});
});

function reversStr(str) {
	let revStr = "";
	for (let i = str.length - 1; 0 < i; i--) {
		revStr += str[i];
	}
	return revStr;
}
