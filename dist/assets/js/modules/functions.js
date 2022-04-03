export default function helpers() {
	// on method help adding event on elements
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

	// get method help select elements from the DOM
	window.get = function (selector, all = false) {
		if (all) return [...document.querySelectorAll(selector)];
		return document.querySelector(selector);
	};

	// Debounce function to help as avoid unnecessary events firing
	window.debounce = function (func, delay) {
		let timeoutId;
		return function (...args) {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(() => {
				func(...args);
			}, delay);
		};
	};
}

// Open and close menu
export function openCloseMenu() {
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
}

// Select language
export function selectLang() {
	const selectLang = get(".select-lang");
	const selectedLang = get(".selected-lang span");

	selectLang.on("click", (e) => {
		if (e.target.tagName === "LI") {
			selectedLang.innerText = e.target.dataset.lang;
		}
		selectLang.classList.toggle("open");
	});
}

// Hide the placeholder when the input is focused
export function hidePlaceholder() {
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
export function showAndHidePass() {
	get(".show-and-hide-pass", true).forEach((el) => {
		el.on("click", (e) => {
			const targetInput = get(e.currentTarget.dataset.target);
			const currentType = targetInput.getAttribute("type");
			const type = currentType === "password" ? "text" : "password";
			targetInput.setAttribute("type", type);
		});
	});
}

// search suggestions box
export function searchFunctionality() {
	get(".input-search  .search-btn").on("click", () => {
		window.location.pathname = "/search-result.html";
	});
	const searchInput = get(".input-search input");
	const searchSuggestionsBox = get(".input-search .search-suggestions-box");

	searchSuggestionsBox.querySelectorAll("li").forEach((li) => {
		li.on("click", (e) => {
			searchSuggestionsBox.querySelectorAll("li").forEach((_li) => _li.classList.remove("selected"));
			const suggestionVal = e.currentTarget.querySelector("span").textContent;
			searchInput.value = suggestionVal;
			li.classList.add("selected");
			searchSuggestionsBox.classList.remove("open");
		});
	});

	searchInput.on("focus", () => {
		searchSuggestionsBox.classList.add("open");
	});
}

// init the home page sliders
export function homeMainSlider() {
	const _mainSlider = new Swiper(".main-slider", {
		direction: "horizontal",
		loop: true,
		pagination: {
			el: ".swiper-pagination",
		},
	});
}

// init the discount slider
export function discountSlider() {
	const _discountSlider = new Swiper(".discount-slider", {
		slidesPerView: 1,
		spaceBetween: 20,
		direction: "horizontal",
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			800: {
				slidesPerView: 3,
			},
		},
	});
}

// product quantity counter
export function productQuantityCounter() {
	get(".add-product-to-card", true).forEach((item) => {
		let count = 0;
		const increaseBtn = item.querySelector(".increase-btn");
		const decreaseBtn = item.querySelector(".decrease-btn");
		const kgCount = item.querySelector(".kg-count");

		kgCount.innerText = count;
		increaseBtn.on("click", () => {
			count++;
			kgCount.innerText = count;
		});
		decreaseBtn.on("click", () => {
			if (count === 0) return;
			count--;
			kgCount.innerText = count;
		});
	});
}

// active "add to card button"
export function activeAddToCardBtn() {
	get(".add-product-to-card button", true).forEach((btn) => {
		btn.on("click", () => {
			btn.classList.toggle("button-green");
			if (btn.classList.contains("button-green")) {
				btn.querySelector("span").innerText = "في للسلة";
				return;
			}
			btn.querySelector("span").innerText = "اضف للسلة";
		});
	});
}

// pagination functionality
export function paginationFunctionality() {
	const pagination = get(".pagination-nav");
	const nextBtn = get(".pagination-nav .next");
	const prevBtn = get(".pagination-nav .prev");
	const lastBtn = get(".pagination-nav .last");
	const paginationList = get(".pagination-nav .pagination .padg-item", true);
	paginationList.forEach((item) => {
		item.on("click", () => {
			paginationList.forEach((_item) => _item.classList.remove("active"));
			item.classList.add("active");
		});
	});

	nextBtn.on("click", () => {
		const currentActiveBadg = get(".pagination .padg-item.active");
		const currentIndex = parseInt(currentActiveBadg.dataset.index);
		if (currentIndex !== paginationList.length) {
			currentActiveBadg.nextElementSibling.click();
		}
	});

	prevBtn.on("click", () => {
		const currentActiveBadg = get(".pagination .padg-item.active");
		const currentIndex = parseInt(currentActiveBadg.dataset.index);
		if (currentIndex !== 1) {
			currentActiveBadg.previousElementSibling.click();
		}
	});

	lastBtn.on("click", () => {
		paginationList[paginationList.length - 1].click();
	});
}

// filter box
export function filterBox() {
	const openCloseFilterBtn = get(".open-close-filter-box");
	const filterBox = get(".filter-content");
	const viewResultBtn = get(".view-result");
	openCloseFilterBtn.on("click", () => {
		filterBox.classList.toggle("open");
	});
	viewResultBtn.on("click", () => {
		filterBox.classList.remove("open");
	});
}

// Add dynamic date on the footer
export function setDynamicDateOnFooter() {
	const footerDate = get("#current-year");
	if (footerDate) {
		footerDate.innerText = new Date().getFullYear();
	}
}
