import './index.html';
//import './libs/swiper.js';
import './index.scss';


import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
	navigation: {
		nextEl: '.arrow-right',
		prevEl: '.arrow-left',
	},
});


// Modal

let modalBtns = [...document.querySelectorAll(".modal-toggle")];
modalBtns.forEach(function(btn){
	btn.onclick = function() {
		let modal = btn.getAttribute('data-modal');
		document.getElementById(modal).style.opacity = "1";
		document.getElementById(modal).style.visibility = "visible";
	}
});

var closeBtns = [...document.querySelectorAll(".modal-close")];
closeBtns.forEach(function(btn){
	btn.onclick = function() {
		var modal = btn.closest('.modal');
		modal.style.opacity = "0";
		modal.style.visibility = "hidden";
	}
});

window.onclick = function(event) {
	if (event.target.className === "modal") {
		event.target.style.opacity = "0";
		event.target.style.visibility = "hidden";
	}
}