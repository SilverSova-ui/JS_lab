"use strict"
class Menu{
	handleEvent(event){
		switch(event.type){
			case 'mousedown':
			elem.innterHTML = "Нажата кнопка мыши";
			break;
		case 'mouseup':
			elem.innerHTML += "..Ненадо.";
			break;
		}
	}
}

let menu = new Menu();
elem.addEventListener('mousedown' , menu);
elem.addEventListener('mouseup' , menu);