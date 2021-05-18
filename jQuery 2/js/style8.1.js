function hideDiv(){
	$('#cubik').hide();
	$("button:eq(0)").replaceWith("<button onClick='showDiv()'>Показать</button>");
	$("button:eq(1)").remove();
	$("button:gt(0)").css("display","none");
}

function showDiv(){
	$('#cubik').show();
	$("button:eq(0)").replaceWith("<button onClick='hideDiv()'>Скрыть</button>");
	$("button:eq(0)").after("<button onClick='hideShowDiv()'>Скрыть/отабразить</button>");
	$("button").css("display","inline-block");
}

function hideShowDiv(){
	$('#cubik').toggle('slow');
}

function vanish_div(){
	$('#cubik').fadeOut(5000);
}

function poiwish(){
	$('#cubik').fadeIn(5000);
}

function bledn(){
	$('#cubik').fadeTo(5000, 0.5);
}
