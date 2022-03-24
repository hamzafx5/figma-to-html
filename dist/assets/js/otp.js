const otpInputBox = get(".otp-inputs");
const otpCodeInputs = get(".otp-inputs .otp-input", true);

const otpCode = [];

otpCodeInputs.forEach((input, index) => {
	input.setAttribute("data-index", index);
	input.on("input", (e) => {
		const isNum = Number.isInteger(Number(e.data));
		if (isNum) {
			input.innerHTML = e.data;
			otpCode[index] = Number(e.data);
			const nextSibling = e.currentTarget.nextElementSibling;
			if (input.dataset.index < otpCodeInputs.length - 1) {
				nextSibling.focus();
			}
			// check if the opt code is valid
			const code = otpCode.reduce((prev, current) => {
				return (prev += current.toString());
			}, "");
			if (otpCode.length === 4 && code === "4000") {
				otpInputBox.classList.remove("error");
				otpInputBox.classList.add("valid");
			} else {
				if (otpCode.length !== 4) return;
				otpInputBox.classList.remove("valid");
				otpInputBox.classList.add("error");
			}
		} else {
			input.innerHTML = "";
		}
	});
});

function counter(el, seconds, cb) {
	let currentSecond = seconds;
	const timer = setInterval(() => {
		if (currentSecond < 1) {
			cb();
			clearInterval(timer);
			return;
		}
		currentSecond--;
		el.innerText = formatTimer(currentSecond);
	}, 1000);

	function formatTimer(_seconds) {
		const minutes = Math.floor(_seconds / 60);
		const seconds = _seconds % 60;
		return `${minutes || "00"}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
}

const resendOtpCodeBtn = get("#resend-otp-code-btn");

resendOtpCodeBtn.on("click", () => {
	resendOtpCodeBtn.classList.add("button-disabled");
	counter(get(".counter"), 90, () => {
		resendOtpCodeBtn.classList.remove("button-disabled");
	});
});

counter(get(".counter"), 5, () => {
	resendOtpCodeBtn.classList.remove("button-disabled");
});
