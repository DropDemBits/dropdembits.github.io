
function iconClick() {
	var navBar = document.getElementById("mainNav");
	if(navBar.className === "") {
		navBar.className += "responsive";
	}
	else {
		navBar.className = ""
	}
}

function dropdownClick() {
	var dropdown = document.getElementsByClassName("dropdown-content")[0];
	if(dropdown.style.display === "") {
		dropdown.style.display = "inline-block";
	}
	else {
		dropdown.style.display = "";
	}
}
