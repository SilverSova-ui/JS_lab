function chang1(){
	$("#vkladka1").removeClass("vkl");
	$("#vkladka1").addClass("vklColor");
	$("#vkladka2, #vkladka3, #vkladka4").removeClass("vklColor");
	$("#vkladka2, #vkladka3, #vkladka4").addClass("vkl");
	$("h3").css("color", "#008B8B");
}

function chang2(){
	$("#vkladka2").removeClass("vkl");
	$("#vkladka2").addClass("vklColor");
	$("#vkladka1, #vkladka3, #vkladka4").removeClass("vklColor");
	$("#vkladka1, #vkladka3, #vkladka4").addClass("vkl");
	$("h3").css("color", "#008B8B");
}

function chang3(){
	$("#vkladka3").removeClass("vkl");
	$("#vkladka3").addClass("vklColor");
	$("#vkladka1, #vkladka2, #vkladka4").removeClass("vklColor");
	$("#vkladka1, #vkladka2, #vkladka4").addClass("vkl");
	$("h3").css("color", "#008B8B");
}

function chang4(){
	$("#vkladka4").removeClass("vkl");
	$("#vkladka4").addClass("vklColor");
	$("#vkladka1, #vkladka2, #vkladka3").removeClass("vklColor");
	$("#vkladka1, #vkladka2, #vkladka3").addClass("vkl");
	$("h3").css("color", "#008B8B");
}