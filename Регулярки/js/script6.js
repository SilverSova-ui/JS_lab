//Граница слова: \b
let str = "Обед в 12:00 в комнате 23:456";
alert(str.match(/\b\d\d\:\d\d\b/g))