	function creatTable(){
	document.write('<link rel="stylesheet" href="main.css">')
	let n = prompt('Количество строк');
	let h = prompt('Количество столбцов');
	document.write("<table id='close1'>");
	document.write("<caption>Шахматы</caption>");
	for(i=1; i<= n; i++){
	document.write('<tr>')
	for(j=1; j<=h; j++){
		document.write(`<td></td>`);
	}
		document.write("</tr>");
	}
	document.write("</table>");
	document.write('<input type ="button" onclick="closeTable()" value="Скрыть таблицу">')
	}
	
	function closeTable(){
	if(document.getElementById('close1').style.display == 'none'){
	document.getElementById('close1').style.display = 'table';}
	else{
	document.getElementById('close1').style.display = 'none';
	}
	}