function addEffect1(){
	$("#v1:hidden").show()
	$("#v1").hover(function(){
		$("#v1").css("height","30em");},
	function(){
		$("#v1").css("height","5em");})
}
function addEffect2(){
	$("#v2:hidden").slideDown("slow");
		$("#v2").hover(function(){
		$("#v2").css("height","30em");},
	function(){
		$("#v2").css("height","5em");})
}

function addEffect3(){
	$("#v3:hidden").show().animate({
		fontSize:"36px"
	}, 3000);
		$("#v3").hover(function(){
		$("#v3").css("height","13em");},
	function(){
		$("#v3").css("height","5em");})
	$("#dabl").click(function(){
		$("#v3").dblclick();});
	$("#v3").dblclick(function(){
		$("#v3").toggle();});
}