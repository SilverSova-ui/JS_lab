function buttonColor(){
$("table").css("background", "blue");
$("tr:odd td").css("background", "blue");
$("tr:even td").css("background", "silver");
$("tr:gt(2) td").css("color", "yellow");
}