$(document).ready(function() {
	$('body').scrollspy({ target: '.navbar-1', offset: 115 });

	$('.navbar').on('activate.bs.scrollspy', function () {
		//console.log("new item activated");

		// 1) get the nav item that has the active class
		var activeElements = document.getElementsByClassName("active");
		var activeNav = null;

		// 1.5) make sure I'm only getting one element (with the nav-item class)
		for (var i = 0; i < activeElements.length; i++) {
			if (activeElements[i].classList.contains("nav-item")) { // has wide support
				activeNav = activeElements[i];
			}
		}

		// 2) Remove styling from the children of all of the nav-items
		
		//	- get all nav-items li
		var navItems = document.getElementsByClassName("nav-item");
		
		//  - for those that don't have the active class, reset the styling of their child element
		for (var j = 0; j < navItems.length; j++) {
			if(!navItems[j].classList.contains("active")) {
				navItems[j].childNodes[1].style.color = "#666666";
			}
		}
		
		// 3) Add 'selection' styling to the child of the li with the active class
		activeNav.childNodes[1].style.color = "black";
	});
});