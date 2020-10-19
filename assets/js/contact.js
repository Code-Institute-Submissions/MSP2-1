//If button for contact form is clicked, the options below will appear/disappear

function changeContact() {
    
    
        $("#con-form-text").attr("placeholder", "Fill in you question");
        $(".booking-row-form").addClass("hidden-row");
        $("#contact-button").addClass("active-con");
        $("#book-button").removeClass("active-con");
    
}

//If button for booking form is clicked, the options below will appear disappear

function changeBooking() {
    
    
        $("#con-form-text").attr("placeholder", "Fill in your booking request");
        $(".booking-row-form").removeClass("hidden-row");
        $("#book-button").addClass("active-con");
        $("#contact-button").removeClass("active-con");
    
}
