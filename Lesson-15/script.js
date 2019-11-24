var table = document.getElementsByTagName("table");

table[0].onclick = function(event) {
	var target = event.target,
		text = target.textContent;
		
	if(target.hasAttribute("colspan")) {
		table[0].insertAdjacentHTML('afterbegin', '<tr><td></td><td></td><td></td></tr>');
		return false;
	}
	
	if (target.tagName === 'TD') {
		target.textContent = '';
		target.insertAdjacentHTML('afterbegin','<input type="text"></input>');
		var input = target.children[0];
		input.focus();
		input.value = text;
	
		function replaceInputOnblur() {
			target.textContent = input.value;
			input.remove();
		}

		function replaceInputOnkeyup(event) {
			if (event.keyCode === 13) {
				replaceInputOnblur();
			}
		}

		input.addEventListener('blur',replaceInputOnblur);
		input.addEventListener('keyup',replaceInputOnkeyup);
	}
}



	


