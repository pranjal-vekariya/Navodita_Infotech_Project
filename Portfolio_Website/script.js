let resumeBtn = document.getElementById("resumeBtn");
let bar = document.getElementById("bar")

resumeBtn.addEventListener("click", function () {
	window.open('resume.html')
});

let ul = document.querySelector("ul")
bar.addEventListener("click", function () {
	ul.classList.toggle('showData')
	if (ul.className == "showData") {
		bar.className = "bx bx-x"
	} else {
		bar.className = "bx bx-menu"
	}
});

