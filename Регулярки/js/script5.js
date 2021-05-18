//Многострочный режим якорей ^ $, флаг "m"

let str = `1е место: Винни
2е место: Пятачок
3е место: Слонопотам`;

alert(str.match(/^\d/gm));
alert(str.match(/^\d/g));
alert(str.match(/\d$/gm));

str = `Винни: 1
Пятачок: 2
Слонопотам: 3`;
alert(str.match(/\d\n/gm))