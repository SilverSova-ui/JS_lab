//Якоря: начало строки ^ и конец $
let str1 = "Mary had a little lamb";
alert(/^Mary/.test(str1));

str1 = "if's fleece was white as snow";
alert(/snow$/.test(str1));

let goodInput = "12:34";
let badInput = "12:345";
regexp = /^\d\d\d\d$/;
console.log(regexp.test(goodInput));
console.log(regexp.test(badInput));

//Регулярное выражение ^$
//Какая строк подойдет по шаблон ^$