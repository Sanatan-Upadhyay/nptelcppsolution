

document.addEventListener("DOMContentLoaded", function(event){

	let hamburger = document.querySelector("#hamburger");

	hamburger.addEventListener('click', function () {
		
		let navigation = document.querySelector("#navigation");
		
		if(navigation.style.display === "flex"){
			 navigation.style.display = "none";
		}
		else{
			navigation.style.display = "flex";
		}
	})
});