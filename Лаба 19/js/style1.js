'use strict'
let number = +prompt("Введите число рождения");
let month = +prompt("Введите месяц рождения")-1;
let year = +prompt("Введите год рождения");
let arry_Date =[];
arry_Date.push(number, month, year);
let Dates = new Date(arry_Date[2], arry_Date[1], arry_Date[0]);
let myDay = Math.floor((new Date() - Dates) / 86400000);
document.body.innerHTML = `<p> Вы существуете: `+ myDay + ` дней</p>`