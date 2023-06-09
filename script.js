const input = document.querySelector(".find")
const allLi = document.querySelectorAll(".products-list li")

const checkList = () => {
	for (let li of allLi) {
		if (
			li.textContent.toLowerCase().indexOf(input.value.toLowerCase()) === -1
		) {
			li.style.display = "none"
		} else {
			li.style.display = "block"
		}
	}
}

input.addEventListener("input", checkList)
