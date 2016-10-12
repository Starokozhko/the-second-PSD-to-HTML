(function(){

	var topMenu = document.getElementsByClassName('glyp');
	topMenu[0].addEventListener('click', function(){
		// alert("OK");
		var el = topMenu[0].nextSibling.nextSibling.style;
// console.log(el.display);
if(el.display == '' || el.display == 'none'){
	el.display = 'block';
} else {
	el.display = 'none';
}
})


})();