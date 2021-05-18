$(document).ready(init);

 function init(){
   $('.lesson').bind('change', desc);
 }

 function desc(){
   var op=$('.lesson').val();
   switch (op)
   {
    case '1': $('.desc').text('Первый урок по jQuery знакомит с основными понятиями и возможностями этой библиотеки.'); break;
                                                            
    case '2': $('.desc').text('Второй урок по jQuery знакомит с таким понятием, как селекторы.'); break;
                                                                                                 
    case '3': $('.desc').text('Третий урок по jQuery знакомит с таким понятием, как фильтры.'); break;                                                                                                 
   }
}

function test(){
	$("body").empty();
	let x = "";
	let arry_data =[
	"с основными понятиями и возможностями этой библиотеки",
	"с таким понятием, как селекторы",
	"с таким понятием, как фильтры"
	];
	for(let i=0; i<arry_data.length; i++){
		x += `<div><input type="radio" name="chose" value=`+ arry_data[i] + `>` + arry_data[i] + `</div>`;
	}
	$("body").append("<fieldset><legend>Тест</legend><h2>С чем знакомит второй Урок jQuery?</h2><button onClick='proverka()'>Завершить</button></fieldset>");
	$("h2").after(x);
	var q = 0;
	$('div').each(function(){
	let div_id_arry = ["bad0","won","bad2"];
  	$(this).attr('id', '' + div_id_arry[q]);
  	q++;
	}); 
	var z = 0;
	$('input').each(function(){
	let input_id = ["bad_input0","won_input","bad_input2"];
  	$(this).attr('id', '' + input_id[z]);
  	z++;
	});
	$("div").css("margin","0.5em 0");
	$("button").css("margin-left","60em");
	$('#bad0,#bad2').hover(hOver, hOut);
	$('#won').hover(hOver_won, hOut);
	function hOver(){
 	$(this).css("background-color", "red");
	}
	function hOver_won(){
	$(this).css("background-color", "green");
	}
	function hOut(){
 	$(this).css("background-color", "white");
	}
}

function proverka(){
	if($('#bad_input0, #bad_input2').is(':checked')){
		$("body").empty();
		$("body").css("background","url(img/stalker.jpg)");
		let audio1 = new Audio();
		audio1.src = 'music/dolg.mp3'; 
		audio1.autoplay = true;
	}
	else if($('#won_input').is(':checked')){
		$("body").empty();
		$("body").append("<div id='sidor'></div>");
		let audio2 = new Audio();
		audio2.src = 'music/sidor.mp3'; 
		audio2.autoplay = true;
		}
	else{
		alert('Выбери ответ!');
		let audio3 = new Audio();
		audio3.src = 'music/ashot.mp3'; 
		audio3.autoplay = true;
	}
}