"use strict"

function zero(){
	if("0"){
		alert("привет");
	}
}

function vopros(){
	if(prompt("Официальное название JavaScript?") == "ECMAscript"){
		alert("Правильно");
	}
	else{
		alert("ECMAscript");
	}
}

function znak(){
	let number = prompt("Введите число");
	if(number > 0){
		alert("1");
	}
	else if(number == 0){
		alert("0");
	}
	else{
		alert("-1");
	}
}

function new_operator(){
	let a = prompt("Введите а");
	let b = prompt("Введите b");
	let result = (Number(a) + Number(b) < 4)?alert('мало') :alert('много');
	}

function opert(){
		let login = prompt("Введите логин");
		let message = (login == 'Сотрудник')? "привет" : (login == "Директор")? "Здравствуйте" : (login == '')? "Нет логина" : "";
		alert(message);	
	}

function or(){
	alert(null || 2 || undefined);
}

function or1(){
	alert(alert(1) || 2 || alert(3));
}

function and(){
	alert(1 && null && 2);
}

function and1(){
	alert( alert(1) && alert(2));
}

function and_or(){
	alert(null || 2 && 3 || 4 );
}

function age(){
	let age = +prompt("Введите age");
	if(age >= 14 && age <=90){
		alert("В точку");
	}
	else{
		alert("мимо");
	}
}

function no_age(){	
let age = +prompt("Введите age");
	if(!(age >= 14 && age <=90)){
		alert("В точку");
	}
	else{
		alert("мимо");
	}
}

function no_age1(){	
let age = +prompt("Введите age");
	if(age <= 14 || age >=90){
		alert("В точку");
	}
	else{
		alert("мимо");
	}
}

function vipoln(){
if (-1 || 0) alert ('first');
if (-1 && 0) alert ('second');
if (null || -1 && 1) alert('third');
}

function login(){
let a = prompt("Ввод логина");
	if(a == "Админ"){
		let p = prompt("Ввод пароля");
		if(p == "Я главный"){
			alert("Здравствуйте");
		}
		else if(p == '' || p == null){
			alert("Отменено");
		}
		else{
			alert("Неверный пароль");
		}
	}
	else if(a == '' || a == null){
		alert("Отменено");
	}
	else{
		alert("я тебя не знаю!");
	}
}