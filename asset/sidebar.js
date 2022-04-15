/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length){
		slideIndex = 1;
	} 
	slides[slideIndex-1].style.display = "block";  
	setTimeout(showSlides, 3000); // Change image every 3 seconds
}