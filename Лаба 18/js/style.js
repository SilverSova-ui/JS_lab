'use strict'
let log = "sova";
let pass = "123";
let audio1 = new Audio();

function clicks1(){
switch(document.forms[0].login.value){
case log:
	switch(document.forms[0].password.value){
		case pass:
			switch(document.forms[0].check.checked){
				case true:
					document.location.href = "index.html";
					break;

}
}
default:
    audio1.src = 'music/dolg.mp3'; 
	audio1.autoplay = true;
	document.body.style.background = 'url(img/stalker.jpg)';
	document.getElementById("fos").style.display = 'none';

}
}
