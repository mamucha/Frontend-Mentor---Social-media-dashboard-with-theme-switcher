function toogleSwitch() {
	document
		.querySelector('input[name="toggleChk"]')
		.addEventListener("click", function (e) {
			if (this.checked) {
				document.body.classList.remove("h-dark");
				document.body.classList.add("h-light");
			} else {
				document.body.classList.remove("h-light");
				document.body.classList.add("h-dark");
			}
		});
}

export { toogleSwitch };
