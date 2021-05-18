$("#left").click(function(){
	$("#div_cub").animate({"left":["-=50px", "linear"]} , "slow");
});

$("#up").click(function(){
	$("#div_cub").animate({"top":["-=50px", "linear"]} , "slow");
});

$("#down").click(function(){
	$("#div_cub").animate({"top":["+=50px", "linear"]} , "slow");
});

$("#right").click(function(){
	$("#div_cub").animate({"left":["+=50px", "linear"]} , "slow");
});