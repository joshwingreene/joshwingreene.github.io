$(document).ready(function() {
	// Activate the tab with the defaultOpen id
	document.getElementById("defaultOpen").click();
}); // code is run after the DOM is ready to be manipulated

function projectToggleFunc(event, projectType) {
	// Declare all variables
    var i, tabLinks, portfolioItems;

	// Get all elements with class="portfolio-item" and hide them
    portfolioItems = document.getElementsByClassName("portfolio-item");
    for (i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show/Hide the correct projects based on the project type
	if (projectType == "Software Design") {
		$('.software-design').css('display', 'block');
		$('.web-design').css('display', 'none');
		$('.misc-design').css('display', 'none');
	} else if (projectType == "Web Design") {
		$('.web-design').css('display', 'block');
		$('.software-design').css('display', 'none');
		$('.misc-design').css('display', 'none');
	} else if (projectType == "Misc Design") {
		$('.misc-design').css('display', 'block');
		$('.software-design').css('display', 'none');
		$('.web-design').css('display', 'none');
	}
	// Add an "active" class to the button that opened the tab
	event.currentTarget.className += " active";
}