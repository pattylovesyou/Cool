
window.addEventListener("mousedown", function(){

	var bruhsound = new Audio('audio/bruh.mp3');
	bruhsound.play();

	var mousex = event.clientX;
	var mousey = event.clientY;

	var bruhman = document.createElement("IMG");
	bruhman.setAttribute("src", "images/bruhman.png");
	bruhman.setAttribute("width", "48");
	bruhman.setAttribute("id", "bruhman");
	bruhman.setAttribute("draggable", "false");
	document.body.appendChild(bruhman);


	bruhman.style.top = mousey + "px";
	bruhman.style.left = mousex + "px";
	bruhman.style.opacity = "100";

	setTimeout(bruhmantimeout, 3000);
		function bruhmantimeout(){
			bruhman.style.opacity = "0";
		}

});