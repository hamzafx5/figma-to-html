import helpers, {
	openCloseMenu,
	setDynamicDateOnFooter,
	searchFunctionality,
	productQuantityCounter,
	activeAddToCardBtn,
	homeMainSlider,
	discountSlider,
	selectLang,
	hidePlaceholder,
	showAndHidePass,
	paginationFunctionality,
	filterBox,
} from "./modules/functions.js";

import { dropdownBox, productDetailsSlider, disableAddToCardBtn } from "./modules/functions-2.js";

// init helpers fun
helpers();

window.addEventListener("DOMContentLoaded", () => {
	const currentPage = document.body.dataset.page;
	openCloseMenu();
	selectLang();
	function commonFunctionality() {
		searchFunctionality();
		filterBox();
		productQuantityCounter();
		activeAddToCardBtn();
	}

	switch (currentPage) {
		case "home":
			commonFunctionality();
			homeMainSlider();
			discountSlider();
			break;
		case "home-logged":
			commonFunctionality();
			homeMainSlider();
			dropdownBox();
			paginationFunctionality();
			break;
		case "home-2":
			commonFunctionality();
			break;
		case "product-details":
			commonFunctionality();
			productDetailsSlider();
			disableAddToCardBtn();
			break;
		case "product-details-2":
			commonFunctionality();
			productDetailsSlider();
			break;
		case "search-result":
			commonFunctionality();
			homeMainSlider();
			dropdownBox();
			paginationFunctionality();
			break;
		case "search-result-2":
			commonFunctionality();
			dropdownBox();
			paginationFunctionality();
			break;
		case "login":
		case "signup":
			hidePlaceholder();
			showAndHidePass();
			break;
	}
	setDynamicDateOnFooter();
});

function s(_str) {
	let str = _str.replace(/\n/g, "");
	let revStr = "";
	for (let i = str.length - 1; 0 <= i; i--) {
		revStr += str[i];
	}
	return revStr;
}

console.log(s("(ماﺮﺟ 400) ﺔﺒﺣ 24"));
