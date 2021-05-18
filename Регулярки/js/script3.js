//Юникод: флаг "u" и класс \p{...}
alert('😄'.length);

let str = "A ბ ㄱ";
alert(str.match(/\p{L}/gu));
alert(str.match(/\p{L}/g));

let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;
alert("число: xAF".match(regexp));

regexp = /\p{sc=Han}/gu
str = "Hello Привет 你好 123_456"
alert(str.match(regexp));

regexp = /\p{Sc}\d/gu
str = "Цены: $2, €1, ¥9"
alert(str.match(regexp));

