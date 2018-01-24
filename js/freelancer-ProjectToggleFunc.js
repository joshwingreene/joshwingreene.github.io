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

    // Show the user which section is being shown + Show/Hide the correct projects based on the project type
	if (projectType == "UX Case Studies") {
		toggleTableDataColor("caseStudyTD");

		$('.ux-case-study').css('display', 'block');
		$('.web-design').css('display', 'none');
		$('.ui-design-practice').css('display', 'none');
		$('.misc-design').css('display', 'none');
	} else if (projectType == "Web Design") {
		toggleTableDataColor("webDesignTD");
		
		$('.web-design').css('display', 'block');
		$('.ux-case-study').css('display', 'none');
		$('.ui-design-practice').css('display', 'none');
		$('.misc-design').css('display', 'none');
	} else if (projectType == "UI Design") {
		toggleTableDataColor("uiDesignTD");
		
		$('.ui-design-practice').css('display', 'block');
		$('.ux-case-study').css('display', 'none');
		$('.web-design').css('display', 'none');
		$('.misc-design').css('display', 'none');
	} else if (projectType == "Misc Design") {
		toggleTableDataColor("miscDesignTD");
		
		$('.misc-design').css('display', 'block');
		$('.ux-case-study').css('display', 'none');
		$('.web-design').css('display', 'none');
		$('.ui-design-practice').css('display', 'none');
	}
	// Add an "active" class to the button that opened the tab
	event.currentTarget.className += " active";
}

function toggleTableDataColor(sectionID) {

	// Set the main toggle color
	$("#" + sectionID).css('background', '#424242'); // sets the td's background color

	// Removes the disabled class from the associated button
	//$(sectionID + "-btn").removeClass('disabled');

	//$(sectionID + "-btn").addClass('active');

	// Reset all of the other sectios
	if (sectionID == "caseStudyTD") {
		$('#webDesignTD').css('background', 'none');
		$('#uiDesignTD').css('background', 'none');
		$('#miscDesignTD').css('background', 'none');
	} else if (sectionID == "webDesignTD") {
		$('#caseStudyTD').css('background', 'none');
		$('#uiDesignTD').css('background', 'none');
		$('#miscDesignTD').css('background', 'none');
	} else if (sectionID == "uiDesignTD") {
		$('#caseStudyTD').css('background', 'none');
		$('#webDesignTD').css('background', 'none');
		$('#miscDesignTD').css('background', 'none');
	} else if (sectionID == "miscDesignTD") {
		$('#caseStudyTD').css('background', 'none');
		$('#webDesignTD').css('background', 'none');
		$('#uiDesignTD').css('background', 'none');
	}
}