function changeContact() {
    
    
        $("#con-form-text").attr("placeholder", "Fill in you question");
        $(".booking-row-form").addClass("hidden-row");
        $("#contact-button").addClass("active-con");
        $("#book-button").removeClass("active-con");
    
}

function changeBooking() {
    
    
        $("#con-form-text").attr("placeholder", "Fill in your booking request");
        $(".booking-row-form").removeClass("hidden-row");
        $("#book-button").addClass("active-con");
        $("#contact-button").removeClass("active-con");
    
}
