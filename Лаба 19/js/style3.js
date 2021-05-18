{
let p = document.getElementById('t');
r=p.value;
let win=window.open("", "", "width=400, heigh=500");
win.document.open();
let str = "<h1>" +r+ "!!!<h1><hr><p>";
win.document.write(str);
str = '<img src="floor.jpg">';
win.document.write(str);
str = '<input type="button" value="закрыть"' + 'onClick'="window.close();">;
win.document.close();
}
