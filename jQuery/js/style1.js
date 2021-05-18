function polVod(){
$(":text, :password").css("background", "red");
$(":button").css("background", "none");
};

function buttonCnopk(){
	$(":button").css("background", "blue");
	$(":text, :password").css("background", "white");
};

function buttonClear(){
	$(":button").css("background", "none");
	$(":text, :password").css("background", "white");
}