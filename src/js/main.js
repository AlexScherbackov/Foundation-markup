"use strict";
svg4everybody();

// @include('detect.js')
// @include('globals.js')
// @include('menudate.js')
// @include('functions.js')

// @include('./classes/menu.js')



	const menu = new Megamenu(menuData);

	const menuItems = $document[0].querySelectorAll('.main-head-menu__link');
	console.log(menuItems);

	menuItems.forEach( function(element, index) {
		element.addEventListener('click', ()=>{
			const menuBlock = element.parentNode.querySelector('.megamenu');
			element.classList.toggle('open');
			menuBlock.classList.toggle('open')
		});
	});		




