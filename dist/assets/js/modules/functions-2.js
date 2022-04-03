// add dropdown functionality to a custom dropdown
export function dropdownBox() {
	const selectedItem = get(".dropdown-box .selected-item span");
	const dropdownContent = get(".dropdown-box .dropdown-content");
	const dropdownList = get(".dropdown-box .dropdown-item", true);

	selectedItem.on("click", () => {
		dropdownContent.classList.toggle("open");
	});

	dropdownList.forEach((item) => {
		item.on("click", () => {
			dropdownList.forEach((_item) => _item.classList.remove("item-selected"));
			item.classList.add("item-selected");
			selectedItem.innerText = item.innerText;
			selectedItem.click();
		});
	});
}

// product details slider
export function productDetailsSlider() {
	const activeSlide = get(".product-slides .product-active-slide");
	const slidesItems = get(".product-slides .product-slides-items img", true);

	slidesItems.forEach((slide) => {
		slide.on("click", (e) => setSlide(e.target));
		slide.on("mouseenter", (e) => setSlide(e.target));
	});

	function setSlide(slide) {
		slidesItems.forEach((_slide) => _slide.classList.remove("active"));
		slide.classList.add("active");
		activeSlide.src = slide.src;
	}
}

// disable add to card btn if the product not available on the selected address
export function disableAddToCardBtn() {
	const addresses = get(".product-availability select");
	const addToCardBtn = get(".product-details .product-quantity #add-to-card-btn");
	addresses.on("change", (e) => {
		if (e.target.value === "3") {
			addToCardBtn.classList.add("button-disabled");
			addToCardBtn.classList.remove("button-green");
			return;
		}
		addToCardBtn.classList.remove("button-disabled");
	});
}
