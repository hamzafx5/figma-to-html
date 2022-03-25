const mainSlider = new Swiper(".main-slider", {
	direction: "horizontal",
	loop: true,
	pagination: {
		el: ".swiper-pagination",
	},
});

const discountSlider = new Swiper(".discount-slider", {
	slidesPerView: 1,
	spaceBetween: 20,
	direction: "horizontal",
	loop: true,
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

// product quantity counter
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
