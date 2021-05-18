let arry_div =[1,2,3,4,5,6,7];
let arry_corner = ["bevel","notch","dog","dog2","bite","cool",
"sharp","slide","jut","curl","tear","fray","wicked","sculpt"];
let y= 0;
let x ="";
let i = 0;
while(y < 2){
	for(i=0; i < 7; i++){
		x += `<div>`+ arry_div[i] + `</div>`
	}
y++;
}
$("#glav").append(x);
$("#glav div").empty();
$("#glav div").attr("class", "block");
let q = 0;
$('#glav div').each(function(){
$(this).attr('id', '' + arry_corner[q]);
$(this).corner(arry_corner[q]);
$(this).append(`<p>`+ arry_corner[q] +`<p>`)
  	q++;
});
