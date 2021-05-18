//Экранирование, специальные символы
alert("Глава 5.1".match(/\d\.\d/));
alert("Глава 511".match(/\d\.\d/));
//Экранирование символов
alert("function g()".match(/g\(\)/));
alert("1\\2".match(/\\/));
//Косая черта
alert("/".match(/\//));
alert("/".match(new RegExp("/")));

//new RegExp
let regexp = new RegExp("\d\.\d");
alert("Глава 5.1".match(regexp));

let regStr = "\\d\\.\\d"
alert(regStr);

regexp = new RegExp(regStr);
alert("Глава 5.1".match(regexp));