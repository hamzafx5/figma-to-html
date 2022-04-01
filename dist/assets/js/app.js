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

// init helpers fun
helpers();

window.addEventListener("DOMContentLoaded", () => {
	const currentPage = document.body.dataset.page;
	openCloseMenu();
	selectLang();

	switch (currentPage) {
		case "home":
			searchFunctionality();
			filterBox();
			homeMainSlider();
			discountSlider();
			productQuantityCounter();
			activeAddToCardBtn();
			break;
		case "search-result":
			searchFunctionality();
			filterBox();
			homeMainSlider();
			productQuantityCounter();
			activeAddToCardBtn();
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

console.log(s("جئاتنلا ضرع"));
