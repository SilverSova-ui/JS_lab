'use strict'
let i, x = "";
let arry = [];
let arry_tag =["Имя: ","Телефон: ","email: ","Дата посещения: ","Возраст: ","Кухня: ","Любимое блюда: ","Оценка нашего заведения: ","Рекомендация: "];
let audio2 = new Audio();
audio2.src = 'music/prohod.mp3'; 
audio2.autoplay = true;
function cliks(){
arry = [];
x='';
let log = document.forms[0].getElementsByClassName("log")[0].value;
let telph = document.getElementsByClassName("telph")[0].value;
let email = document.getElementsByClassName("email")[0].value;
let dataPost = document.getElementsByClassName("dataPost")[0].value;
let kuxn = document.querySelector("#sel").value;
let vozrost = document.getElementsByClassName("vozrost")[0].value;
let pozhelania = document.getElementsByClassName("pozhelania")[0].value;
let mod1 = document.createElement("div");
let mod2 = document.createElement("div");
let whyChose = document.querySelectorAll("input[name = 'chose1']");
let whyChose1 = document.querySelectorAll("input[name = 'chose2']");
	for(let q of whyChose){
		if(q.checked){
			whyChose = q.value;
		break;
		}
	}
		for(let s of whyChose1){
		if(s.checked){
			whyChose1 = s.value;
		break;
		}
	}
arry.push(log);
arry.push(telph);
arry.push(email);
arry.push(dataPost);
arry.push(vozrost);
arry.push(kuxn);
arry.push(pozhelania);
arry.push(whyChose);
arry.push(whyChose1);
if(document.forms[0].log.length = true && telph.length && email.length && dataPost.length && vozrost.length && kuxn.length && whyChose.length && whyChose1.length){
mod1.append(mod2);
mod1.setAttribute("class", "mods1");
mod2.setAttribute("class", "mods2");
document.body.append(mod1);
for (i=0; i<arry.length; i++){
x += `<p>`+ arry_tag[i] + arry[i] +`</p>`;
} 
mod2.innerHTML = x + "<input type='button' value='закрыть' id='zakr' onclick='zakrv()'>";
localStorage.setItem('test', x);
sessionStorage.setItem('test1', x);
let audio3 = new Audio();
audio3.src = 'music/ashot.mp3'; 
audio3.autoplay = true;
}
else{
	let audio4 = new Audio();
	audio4.src = 'music/sidorovich.mp3'; 
	audio4.autoplay = true;
	alert("Заполниите анкету!")
}
}

function zakrv(){
document.write("<fieldset style='width:20em; position:fixed; top:25vh; left:40em;'><legend>Ваша анкета(sessionStorage)</legend>" + sessionStorage.getItem('test1') + "</fieldset>");}