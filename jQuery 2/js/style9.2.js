$(document).ready(function(){
	$("div:first-child").click(function(){
		$("img").animate({
			opacity: "toggle",
			left: "+=10",
			height:"toggle"}, 5000, function(){
			$(this).after("<p>Братан анимация завершена!</p>")
		});
	});
$("div:eq(1)").click(function(){
$("img").animate({
	width:["toggle","swing"],
	height:["toggle","swing"],
	opacity:"toggle"
}, 5000, "linear", function(){
	$(this).after("<p>Братан анимация завершена</p>");
});
});
})