"use strict"
elem.ontransitionend = function(){
	alert("DOM property");
};

elem.addEventListener("transitionend", function(){
	alert("addEventListener");
});