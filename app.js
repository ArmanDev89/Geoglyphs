let header = document.querySelector('header'),
	headerWrapper = document.getElementById('header'),
	link = document.querySelectorAll('.link'),
	logo = document.querySelector('.logo'),
	headerH = document.querySelector('header').clientHeight;


document.onscroll = function(){
	let scroll = window.scrollY;

	if(scroll >= headerH){
		headerWrapper.style.backgroundColor = "white";
		header.classList.add('fixed');
		for (let i = 0; i < link.length; i++) {
			link[i].classList.add('link-black');
		}
		logo.classList.add('logo-black');
	} else {
		headerWrapper.style.backgroundColor = "transparent";
		header.classList.remove('fixed');
		for (let i = 0; i < link.length; i++) {
			link[i].classList.remove('link-black');
		}
		logo.classList.remove('logo-black');
	}
}