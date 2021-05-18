let color1 = 'white';
let color2 = 'black';
let divTable = document.createElement("Table");
let tableWidth = document.getElementsByClassName("tableWidth")[0];
let tableHeight = document.getElementsByClassName("tableHeight")[0];
let Table = document.createElement("div");
Table.style.marginTop = '1em';
let Tbody = document.createElement("Tbody");
let w = tableWidth.value;
let h = tableHeight.value;
Table.id = "close1";

function buttonClick(){
let but = document.createElement('div');
but.innerHTML = "<input value='спрятать' type='button' onclick='closeTable()'><input value='инверсия' type='button' onclick='colors()'><input value='Обратная инверсия' type='button' onclick='colorsBack()'><input value='Цвет' type='button' onclick='ZaprColor()'>"; 
but.style.marginTop = '1em';
document.body.append(but);
document.getElementById('vanish').style.display = 'none';
for(let i=0; i<h; i++){
	let tableRow = document.createElement("tr");
	for (let j=0; j<w; j++){
	let tableCell = document.createElement("td");
	tableRow.append(tableCell);
	}
	Tbody.append(tableRow);
	}
	Table.append(Tbody);
	document.body.append(Table);	
	document.body.append(div);
}

	function closeTable(){
	if(document.getElementById('close1').style.display == 'none'){
	document.getElementById('close1').style.display = 'table';}
	else{
	document.getElementById('close1').style.display = 'none';
	}
	}
	
function colors(){
	for (let i=0; i<h; i++){
	for (let j=0; j<w; j++){
		let wh=i*h+j;
	if (wh%2 == 1){
	document.getElementsByTagName("td")[wh].style.background = color1;
	}
	else{
		document.getElementsByTagName("td")[wh].style.background = color2;
	}
	}
	}
}

function colorsBack(){
	for (let i=0; i<h; i++){
	for (let j=0; j<w; j++){
		let wh=i*h+j;
	if (wh%2 == 1){
	document.getElementsByTagName("td")[wh].style.background = color2;
	}
	else{
		document.getElementsByTagName("td")[wh].style.background = color1;
	}
	}
	}
}

function ZaprColor(){
	let zapr1 = prompt('Введите цвет');
	let zapr2 = prompt('Введите цвет');
	for (let i=0; i<h; i++){
	for (let j=0; j<w; j++){
		let wh=i*h+j;
	if (wh%2 == 1){
	document.getElementsByTagName("td")[wh].style.background = zapr1;
	}
	else{
		document.getElementsByTagName("td")[wh].style.background = zapr2;
	}
	}
	}
}