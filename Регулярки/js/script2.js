//Символьные классы
'use strict'
let str = "+7(903)-123-45-67"
let regexp = /\d/
console.log(str.match(regexp));

regexp = /\d/g;
console.log(str.match(regexp));
console.log(str.match(regexp).join(' '));

str = "Есть ли стандарт CSS4?";
regexp = /CSS\d/
alert(str.match(regexp))

alert("I love legal 1707".match(/\s\w\w\w\w\w\s\d\d\d\d/));

regexp = /CS.4/

alert("love1707");
alert("love-1707");
alert("love 1707");

alert("1 - 5".match(/\d - \d/));
//

