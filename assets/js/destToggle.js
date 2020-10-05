//Toggles the description paragraph for each listed destination

$(function() {
    $(".li-text").click(function() {
	    $(".dest-disc", this).slideToggle(500);
    });
})