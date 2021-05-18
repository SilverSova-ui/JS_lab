$(document).ready(function(){
	$("fieldset:first-child input:eq(1)").css("font-style", "italic");
	$("fieldset:eq(1) input:visible").css("border", "1px solid blue");
	$("input[id]").css("color", "red");
	$("input[name$='email']").css("color", "blue");
	$("fieldset:first-child div:last-child input").css("border", "1px solid green");
});