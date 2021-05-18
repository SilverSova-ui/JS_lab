//Задача 1
function camilaze(str){
str = "background-color".split('');
let a = str[0].toUpperCase();
let b = str[11].toUpperCase();
str.splice(0, 1, a);
str.splice(11, 1, b);
let new_arr = str.join('').split('-');
document.body.innerHTML = "<p>"+ new_arr[0] + new_arr[1] + "</p>";
}

camilaze();
//рандомайзер
function getRandomArbitary(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
let n = 5;
let num1_arry = [];
let num2_arry = [];
for (let i = 0; i < n; i++){
	num1_arry[i] = getRandomArbitary(0, 100);
}
for (let i = 0; i < n; i++){
	num2_arry[i] = getRandomArbitary(0, 100);
}
console.log(num1_arry);
console.log(num2_arry);
let num3_arry = [];
let num4_arry = [];
for(let i of num1_arry){
	for(let j of num2_arry){
		if(i==j && !(i in num3_arry)){
			num3_arry.push(i);
		}
	}
}
for(let i of num1_arry.concat(num2_arry)){
	if(!(num3_arry.includes(i))){
		num4_arry.push(i);
	}
}
console.log(num3_arry);
console.log(num4_arry);

//Задача 2
let arr_z2 = [5, 3, 8, 1];
function filterRange(arr_z2, a, b) {
return arr_z2.filter(item => (a <= item && item <= b));
}
let filtered = filterRange(arr_z2, 1, 4);
console.log(filtered);
console.log(arr_z2);

//Задача 3
let arr_z3 = [5, 3, 8, 1];
function filterRangeInPlace(arr_z3, a, b){
	for (let i=0; i<arr_z3.length; i++){
		if(arr_z3[i] < a || arr_z3[i] > b){
			arr_z3.splice(i, 1);
		}
	}
}
filterRangeInPlace(arr_z3, 1, 4);
console.log(arr_z3);

//задача 4
let arr_z4 = [5, 2, 1, -10, 8];
function sort(a,b){
	return b - a;
}
arr_z4.sort(sort)
console.log(arr_z4);

//задача 5
function copySorted(arr){
	return arr_z5.slice().sort();
}
let arr_z5 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr_z5);
console.log(sorted);
console.log(arr_z5);

//задача 6
let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};
let users = [vasya, petya, masha];
let names = [];

for(i of users){
	names.push(i.name);
}
console.log(names);

//Задача 7
let arr_z7 = [1, 2, 3];
let arr_z72 = [4, 5, 6];
function shuffle(array){
	array.sort(() => Math.random() - 0.5);
}
shuffle(arr_z7);
shuffle(arr_z72);
console.log(arr_z7);
console.log(arr_z72);

//задача 8
vasya = {name: "Вася", age:25};
petya = {name: "Петя", age:30};
masha = {name: "Маша", age:29};
let arr_z8 = [vasya, petya, masha];
let sum = [];
for(i of arr_z8){
	sum.push(i.age);
}
function getAverageAge(users){
	users = (sum[0] + sum[1] + sum[2])/3;
	console.log(Math.floor(users));
}
getAverageAge();

//задача 9
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let arr_z9 = [];
for(let i of strings){
	if(!(arr_z9.includes(i))){
		arr_z9.push(i);
	}
}
console.log(arr_z9);

//задача 10

vasya = {name: "Вася", age:25};
petya = {name: "Петя", age:30};
masha = {name: "Маша", age:29};
let arr_z10 = [vasya, petya, masha];
arr_z10.sort((a, b)=>a.age>b.age?1:-1).forEach(a=>console.log(a.name));

//задача 11
vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };
let arr_name = [];
let arr_surname = [];
let arr_id = [];
users = [vasya, petya, masha];
for(i of users){
	arr_name.push(i.name);
	arr_surname.push(i.surname);
	arr_id.push(i.id);
}
let usersMapped = [];
for(i in arr_name){
	usersMapped.push({"fullName":arr_name[i] + " " + arr_surname[i], "id":arr_id[i]})
}
console.log(usersMapped);