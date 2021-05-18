'use strict'
let a = +prompt("Введите число a");
if(a){
	let b = +prompt("Введите число b");
	let c = +prompt("Введите число с");
	let d = (b**2) - (4*a*c);
	if(d>0){
		let x1 = (-b+(d**0.5))/(2*a);
		let x2 = (-b-(d**0.5))/(2*a);
		document.body.innerHTML = 'x1 = '+ x1 + ' ' + 'x2 = ' + x2;
	}
	else if(d==0){
		let x = (-b+(d**0.5))/(2*a);
		document.body.innerHTML = 'x =' + x;
	}
	else{
		let x1 = '('+ -b +' + '+ (Math.abs(d)**0.5) +' j)/(2*'+ a +')';
		let x2 = '('+ -b +' + '+ (Math.abs(d)**0.5) +' j)/(2*'+ a +')';
		document.body.innerHTML = 'x1= '  + x1 + '' + 'x2= ' + x2;
	}
}
else{
	let b = +prompt("Введите число b");
	let c = +prompt("Введите число с");	
	let x = -(c/b);
	document.body.innerHTML = 'x =' + x;
}