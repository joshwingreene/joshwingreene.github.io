$(document).ready(function() {
    var previewShots = $('.preview-shot');

	for (var i = 0; i < previewShots.length; i++) {
        var jQueryObject = previewShots.eq(i);
        jQueryObject.id = previewShots[i].id;
		addHoverFunctionality(jQueryObject);
	} 
});

function addHoverFunctionality(element) {
    
    switch(element.id) {
        case 'untaboo':
            addMouseOverAndOut(element, 'untaboo-preview.png', 'untaboo-preview-hover.png');
            break;
        case 'myseattle':
            addMouseOverAndOut(element, 'myseattle-preview.png', 'myseattle-preview-hover.png');
            break;
        case 'percy':
            addMouseOverAndOut(element, 'percy-preview.png', 'percy-preview-hover.png');
            break;
        case 'stealth-startup':
            addMouseOverAndOut(element, 'stealth-startup-preview.png', 'stealth-startup-preview-hover.png');
            break;
        case 'pocket-ux-case-study':
            addMouseOverAndOut(element, 'pocket-ux-case-study-preview.png', 'pocket-ux-case-study-preview-hover.png');
            break;
        case 'fresno-transit-free':
            addMouseOverAndOut(element, 'fresno-transit-free-preview.png', 'fresno-transit-free-preview-hover.png');
            break;
        case 'sd-website':
            addMouseOverAndOut(element, 'sd-website-preview.png', 'sd-website-preview-hover.png');
            break;
        case 'misc-design-work':
            addMouseOverAndOut(element, 'misc-design-work-preview.png', 'misc-design-work-preview-hover.png');
            break;
        default:
            break;	
    }
}

function addMouseOverAndOut(element, origImg, hoverImg) { // Includes touch support
    var imagePath = "img/";

    // Mouse Support
    element.mouseover(function() {
        element.attr('src', imagePath + hoverImg);
    });
    element.mouseout(function() {
        element.attr('src', imagePath + origImg);
    });

    // Touch Support
    element.swipe({
        swipeStatus: function(event, phase, direction, distance, duration) {
            if (phase=="start") {
                element.attr('src', imagePath + hoverImg);
            } else if (phase=="end") {
                element.attr('src', imagePath + origImg);
            }
        },
        triggerOnTouchLeave:true
    });
}