let arry_div =["$('#id_0').draggable()","$('#id_1').draggable({axis:'x'})",
"$('#id_2').draggable({containment:'parent'});","$('#id_3').draggable({cursor:'crosshair'});",
"$('#id_4').draggable({delay:2000});","$('#id_5').draggable({distance:50});","$('#id_6').draggable({handle:'p'});",
"$('#id_7').draggable({revert:true});","$('#id_8').draggable({revert:true,revertDuration:3000});",
"zIndex1","zIndex2","zIndex3"];
let x ="";
for(i=0; i < 12; i++){
	x += `<div><p>`+ arry_div[i] + `</p></div>`
}
$("#container").append(x);
let q = 0;
$('#container div').each(function(){
	$(this).attr('id', 'id_' + q);
	q++
});

$('#id_0').draggable();
$('#id_1').draggable({
	axis:'x'
});
$('#id_2').draggable({
	containment:'parent'
});
$('#id_3').draggable({
	cursor:'crosshair'
});
$('#id_4').draggable({
	delay:2000
});
$('#id_5').draggable({
	distance:50
});
$('#id_6').draggable({
	handle:'p'
});
$('#id_7').draggable({
	revert:true
});
$('#id_8').draggable({
	revert:true,
	revertDuration:3000
});

$('#id_9').css("background","red").draggable({
	zIndex: 1
});
$('#id_10').css("background","blue").draggable({
	zIndex: 2
});
$('#id_11').css("background","green").draggable({
	zIndex: 3
});

