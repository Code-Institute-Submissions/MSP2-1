//Toggles the description paragraph for each listed destination

$(function() {
    $(".li-text").click(function() {
	    $(".dest-disc", this).slideToggle(500);
    });
});

function seeMore() {
    $("#see-more-toggle").click(function() {
        $(".li-item").removeClass("li-hidden").addClass("li-displayed");

        console.log("you clicked");
    });
};