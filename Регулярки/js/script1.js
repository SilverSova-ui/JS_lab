//Введение
'use strict'
let question = prompt("что вы хотите найти?");
let regexp = new RegExp(`${question}`);
console.log(regexp);

let str = "Значит так меченый, я тебя спас и в благородство играть не буду выполнишь пару заданий и мы в расчете."
console.log(str.match(/я/gi));
console.log(str.match(/меченый/gi));

let question1 = prompt("Ищет ли мой господин серебряную сову?").match(/Да/) || [];
if (!question1.length){
	alert("не уже ли мой господин прекратил поиски?")	
}
else{
	alert("Хорошо, продолжаем работать");
}
//