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

showAndHidePass();
hidePlaceholder();

// Open input drop down list
get(".input-drop-down").on("click", (e) => {
	e.currentTarget.classList.toggle("active");
	const selectedItem = get(".input-drop-down .selected-item span");
	if (e.target.tagName === "LI") {
		selectedItem.innerText = e.target.innerText;
	}
});

// check if the passwords are matched
const pass1 = get("#pass");
const pass2 = get("#confirm-pass");
const errorBox = get("#confirm-pass-errors");

pass2.on(
	"input",
	debounce(() => {
		if (pass1.value !== pass2.value) {
			pass2.classList.add("has-errors");
			errorBox.classList.add("input-has-errors");
			errorBox.innerText = "عذرًا، كلمة المرور غير متطابق";
		} else {
			pass2.classList.remove("has-errors");
			errorBox.classList.remove("input-has-errors");
			errorBox.innerText = "";
		}
	}, 1000),
);

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
