let a = new Date().getDate();
let b = new Date().getMonth();
let c = new Date().getFullYear();
let q = new Date().getDay()-1;
let arry_one = [];
arry_one.push(a, c);
let arry_two =['Января', 'Февраля' , 'Марта', 'Апреля' , 'Майа', 'Июня', 'Июля' , 'Августа' , 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let arry_three = ['Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота','Воскресенье'];
document.body.innerHTML = `<p> Сегодня: `  + arry_three[q] + `  ` + arry_one[0] + `  ` + arry_two[b] + `  ` + arry_one[1] + ` года</p>`;