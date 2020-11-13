


window.addEventListener("load", function(event) {
	
		/** ------------------------------Get the modal-----------**/
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("letter");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	btn.onclick = function() {
		modal.style.zIndex = 1;
	  modal.style.opacity = 1;
	  
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.zIndex = 0;
	  modal.style.opacity = 0;
	  
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		  modal.style.zIndex = 0;
		modal.style.opacity = 0;
		
	  }
	}
	/** ------------------------------Get the modal-------------------**/

});