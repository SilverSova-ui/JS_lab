'use strict'
let arry_two = [[1, 2], [3, 4], [5, 6], [7, 8]];
let i, q, x = "";
let y = 0;
function Shahmati_dosk(){
$("button:eq(1)").remove()
$("body").append("<div id='table'></div>")
while (y < 8){
for(i=0; i < 4; i++){
	for(q=0; q < 2; q++){
		x += `<div>`+ arry_two[i][q] +`</div>`;
}
}
y++;
}
$("#table").append(x);
let array = $('#table').children("div").empty();
for(let i=0;i<8;i++){
	for(let j=0;j<8;j++){
		if((j-i)%2==0 || ((j-i)%2==0)){
			$(array[(i*8)+j]).css('background','#f4a460');
		}
		else{
			$(array[(i*8)+j]).addClass("black").css('background','#8B4513');
		}
	}
}
$('button:first-child').replaceWith("<button onClick='Vanish()'>Исчезни доска!</button>");
$("button:first-child").after("<button onClick='Shahki()' style='margin-left:0.5em'>Добавь шашки</button>");
}

function Shahki(){
$("div").filter(".black").slice(0, 12).append("<img src='shahki/shashochka.gif'>");
$("div").filter(".black").slice(20, 32).append("<img src='shahki/shashochka2.gif'>");
$("button:eq(1)").replaceWith("<button onClick='Vanish_Shahki()' style='margin-left:0.5em'>Cкрыть шашки</button>");
}

function Vanish(){
$('#table').remove();
$('button:eq(1)').remove();
$('button:first-child').replaceWith("<button onClick='Shahmati_dosk()'>Появись доска!</button>");
}

function Vanish_Shahki(){
$('img').remove();
$('button:eq(1)').replaceWith("<button onClick='Shahki()' style='margin-left:0.5em'>Добавь шашки</button>");
}