"use strict"
function handler(){
	alert("спасибо!");
}
input.addEventListener("click", handler);
input.removeEventListener("click", handler);
input.onclick = () => alert("Привет");