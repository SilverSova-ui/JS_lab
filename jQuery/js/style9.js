$(document).ready(init);

function init(){
 $('p').hover(hOver, hOut);
}

function hOver(){
 $(this).css("background-color", "blue");
}

function hOut(){
 $(this).css("background-color", "white");
}

$(document).ready(function(){$("#Focus").focus(function(){
	console.log("focus");});
$("#Focus").blur(function(){console.log("blur")})})