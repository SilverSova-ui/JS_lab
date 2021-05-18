'use strict'
let a = +prompt("Введите число a");
if(a){
	let b = +prompt("Введите число b");
	let c = +prompt("Введите число с");
	let d = (b**2) - (4*a*c);
	if(d>0){
		let y1 = (-b+(d**0.5))/(2*a);
		let y2 = (-b-(d**0.5))/(2*a);
		let x1 = '(' + y1 + ')^0.5';
		let x2 = '(' + y2 + ')^0.5';
		document.body.innerHTML = 'x1 = '+ x1 + ' ' + 'x2 = ' + x2;	
	}
	else if(d==0){
		let y = (-b+(d**0.5))/(2*a);
		let x = '(' + y + ')^0.5';
		document.body.innerHTML = 'x =' + x;
	}
	else{
		let y1 = '('+ -b +' + '+ (Math.abs(d)**0.5) +' j)/(2*'+ a +')';
		let y2 = '('+ -b +' + '+ (Math.abs(d)**0.5) +' j)/(2*'+ a +')';
		let x1 = '(' + y1 + ')^0.5';
		let x2 = '(' + y2 + ')^0.5';
		document.body.innerHTML = 'x1= '  + x1 + '' + 'x2= ' + x2;
	}
}
else{
	let b = +prompt("Введите число b");
	let c = +prompt("Введите число с");	
	let y = -(c/b);
	let x = '('+ y +')^0.5';
	document.body.innerHTML = 'x =' + x;
}