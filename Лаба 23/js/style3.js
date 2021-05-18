//Задание 3
let name = [];
let surname = [];
let zapros = 1;
let i,x ="";
while(zapros){
	zapros = prompt("Введите Имя");
	zapros1 = prompt("Введите Фамилию");
	name.push(zapros);
	surname.push(zapros1);
}
for(let i=0; i<name.length-1; i++){
	x += "<p style='margin-left:8px;'>"+ name[i] + " " + surname[i] +"</p>";
}
document.body.getElementsByTagName('div')[0].innerHTML = x;