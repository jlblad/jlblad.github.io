addClickEvent(document.getElementById('menu-button'), toggleMenu);
addClickEvent(document.getElementById('mask'), toggleMenu);

function toggleMenu() {
        toggleClass(document.getElementById('menu-button'), 'active');
        toggleClass(document.getElementById('menu'), 'active');
        toggleClass(document.getElementsByTagName('html')[0], 'inactive');
        toggleClass(document.getElementById('mask'), 'active');
}

function toggleClass(element, cssClass) {
	if (element.className == cssClass) {
		element.className = '';
	} else {
		element.className = cssClass
	}
}

function addClickEvent(elem, func) {
	if (elem.addEventListener) {
		elem.addEventListener('click', func);
	} else if (elem.attachEvent) {
		elem.attachEvent('onclick', func);
	}
}
