$( document).ready(function(){
$(".redBlock, button").wrapAll(document.createElement("div"));
});


function dobavka(){
$(".redBlock").append("<div class='YellowBlock'></div>");
$("p, button").css("font-weight", "bold")
}