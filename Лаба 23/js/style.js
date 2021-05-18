//Задание 1
let source = {
	name:['Максим','Джон','Сова'],
	surname:['Кузнецов','Шепард','Сильвер'],

}
for(let i=0; i<3; i++){
	document.body.getElementsByTagName('div')[0].getElementsByTagName('p')[i].append(source.name[i] + " " + source.surname[i]);
}

//Задание 2
let arry = [];
let zapros = 1;
while(zapros){
	zapros = prompt("Введите Данные");
	arry.push(zapros);
}
for (let i = 0; i < arry.length; i++){
}
alert(arry);