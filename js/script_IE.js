(function(){

	function changes (events) {

		var elementEvent = '';

		var el1 = document.getElementById('slide1');
		var el2 = document.getElementById('slide2');
		var el3 = document.getElementById('slide3');

		var tex = document.querySelectorAll('.slide1');
		var tex2 = document.querySelectorAll('.slide2');
		var tex3 = document.querySelectorAll('.slide3');

		if(events){

			elementEvent = events.srcElement;
			var textOn = document.querySelectorAll("." + elementEvent.getAttribute('id'))


			tex2[0].style.display = 'none';
			tex3[0].style.display = 'none';
			tex[0].style.display = 'none';

			textOn[0].style.display = 'block';


		} else {

			if(el1.getAttribute('checked')) {
				tex2[0].style.display = 'none';
				tex3[0].style.display = 'none';
				tex[0].style.display = 'block';
			}
			if(el2.getAttribute('checked')) {
				tex1[0].style.display = 'none';
				tex3[0].style.display = 'none';
				tex2[0].style.display = 'block';
				console.log('tow');
			}
			if(el3.getAttribute('checked')) {
				tex[0].style.display = 'none';
				tex2[0].style.display = 'none';
				tex3[0].style.display = 'block';
				console.log('thour');
			}

		};



		el1.attachEvent('onfocus', changes);
		el2.attachEvent('onfocus', changes);
		el3.attachEvent('onfocus', changes);
	};

	

	var inputName = document.getElementById('name');
	var inputEmail = document.getElementById('e-mail');
	var inputText = document.getElementById('text');

	function setFirst() {
		inputName.setAttribute('value', 'NAME');
		inputEmail.setAttribute('value', 'E-MAIL');
		inputText.innerHTML =  'MESSAGE';

		inputName.attachEvent('onfocus', cliarInput);
		inputEmail.attachEvent('onfocus', cliarInput);
		inputText.attachEvent('onfocus', cliarInput);
	};

	inputEmail.attachEvent('blur', setText);
	inputText.attachEvent('blur', setText);

	function cliarInput(event) {
		var focusElement = event.srcElement;

		if(focusElement.getAttribute('value') == 'NAME' || focusElement.getAttribute('value') == 'E-MAIL') {

			focusElement.setAttribute('value', '');

			focusElement.detachEvent('onfocus', cliarInput);
			focusElement.attachEvent('onblur', setText);

		} else if(focusElement.innerHTML == 'MESSAGE') {

			focusElement.innerHTML = '';

			focusElement.detachEvent('onfocus', cliarInput);
			focusElement.attachEvent('onblur', setText);
		}
	};

	function setText(event) {
		var blurElement = event.srcElement;

		if(blurElement.getAttribute('value') == null) {

			var textSet = blurElement.getAttribute('name');
			textSet = textSet.toUpperCase();

			if(textSet == 'TEXT') {
				if(blurElement.innerHTML == '') {
					blurElement.innerHTML = 'MESSAGE';
				} 

			} else {

				blurElement.setAttribute('value', textSet);

			}

			blurElement.detachEvent('onblur', setText);
			blurElement.attachEvent('onfocus', cliarInput);

		} 

	};

	changes ();
	setFirst();
})();