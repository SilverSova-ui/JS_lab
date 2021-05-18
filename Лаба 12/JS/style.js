'use strict'
let log = "sova";
let pass = "123";
let audio1 = new Audio();

function clicks1(){
if(document.forms[0].login.value == log && password.value == pass){
let name = login.value;
let passw = password.value;
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(passw);
document.cookie = "expires= + date";
document.cookie = "max-age= 3600";
localStorage.setItem('test', name);
localStorage.setItem('test', name);
console.log(document.cookie)}
else{
if(document.forms[0].login.value != log && password.value != pass){
let name = login.value;
let passw = password.value;
document.cookie = encodeURIComponent(name) + '!=' + encodeURIComponent(passw);
document.cookie = "expires= + date";
document.cookie = "max-age= 0";	
alert("Иди свой дорогой " + document.cookie);
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
}
if(document.forms[0].login.value == log && password.value != pass){
let name = login.value;
let passw = password.value;
document.cookie = encodeURIComponent(name) + '!=' + encodeURIComponent(passw);
document.cookie = "expires= + date";
document.cookie = "max-age= 0";	
alert("Иди свой дорогой "  + document.cookie);
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
}
if(document.forms[0].login.value != log && password.value == pass){
let name = login.value;
let passw = password.value;
document.cookie = encodeURIComponent(name) + '!=' + encodeURIComponent(passw);
document.cookie = "expires= + date";
document.cookie = "max-age= 0";	
alert("Иди свой дорогой " + document.cookie);
	audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';
}
}
}