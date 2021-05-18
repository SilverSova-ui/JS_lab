'use strict'
let user = {};
user.name = "John";
user['surname'] = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);



let source ={
	name:['SilverSova','Petrovich','NePetrovich'],
	age:['10','23','no knov'],
	func: function(){
	for(let i=0; i<3; i++){
	document.body.getElementsByTagName('p')[i].append(this.name[i] + ` age: `+ this.age[i]);
		}
	},
};

source.func();

let salaries = {
	John: 100,
	Ann: 160,
	Petrovich: 130,
};

let sum = 0;
for(let i in salaries){
sum += salaries[i];}
document.body.getElementsByTagName('p')[3].append(sum);

let siv = {};
let key = "";
function pustota(obj){
	for (key in obj) {
      return false;
    }
    return true;
  }

console.log(pustota(siv));
console.log(pustota(source));

let menu ={
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumeric(obj){
	for(let key in obj){
	if(typeof(obj[key]) == "number")
		obj[key] *= 2;
	}
}
multiplyNumeric(menu);
console.log(menu);