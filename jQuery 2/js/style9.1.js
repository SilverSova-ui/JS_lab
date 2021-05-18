function anime(){
$("div:first-child").animate({
	width:"400px",
	height:"200px"
} , 3000);
$('div:eq(1)').animate({
	width:"100px",
	height:"100px"
}, 3000);
}

function STOPanime(){
	$('div:first-child').stop();
	$("div:eq(1)").stop();
}

function vozrat(){
	$("div:first-child").css("width","10em");
	$("div:first-child").css("height","10em");
	$('div:eq(1)').css("width","30em");
	$('div:eq(1)').css("height","15em");
}
