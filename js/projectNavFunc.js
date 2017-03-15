// Manages which section header should be highlighted (full opacity)

$(document).ready(function() {
	// Add handlers to all a tags that have the nav-item class
	$('.nav-item').click(switchNavSelection);
}); // code is run after the DOM is ready to be manipulated

function switchNavSelection(event) {
	// Reset the last selected element
	$('.current-nav-item').css('color', 'rgba(0,0,0,.6)');
	$('.current-nav-item').removeClass('current-nav-item');

	// Update the selected element
	$(event.target).css('color', 'rgba(0,0,0,1)');
	$(event.target).addClass('current-nav-item');
}