let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoopingCart = fruits;
shoopingCart.push("Банан");
console.log(fruits);
console.log(shoopingCart);
alert(fruits.length);

//Задача 2
let styles = ["Джаз", "Блюз"];
alert(styles);
styles.push("Рок-н-ролл");
alert(styles);
styles[1] = "Классика";
alert(styles);
styles.shift();
alert(styles);
styles.unshift("Реп", "Регги")
alert(styles);
//задача 3
let arr = ["a", "b"];
arr.push(function(){
	alert(this);})
arr[2]();
// задача 4
function sumInput() {
let arry_number = [];
let zapros = 1;
let sum = 0;
while(zapros){
	zapros = +prompt("Введите число");
	arry_number.push(zapros);
}
for (let i = 0; i < arry_number.length-1; i++){
	sum += arry_number[i];
}
console.log(arry_number);
return sum;
}
alert(sumInput());

//задача 5
arr = [1,-2, 3, 4, -9, 6];
function getMaxSubSum(arr){
let sum5 = 0; 
  for (let i = 0; i < arr.length; i++){
    let q = 0;
    for (let j = i; j < arr.length; j++){
      q += arr[j];
      sum5 = Math.max(sum5, q);
    }
  }
  return sum5;
}
alert(getMaxSubSum(arr));