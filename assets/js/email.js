//Sends and email with the information from the contact form

function sendMail(contactForm) {
    emailjs.send("gmail", "elitetravel", {
        "from_name": contactForm.firstname.value+" "+ contactForm.lastname.value,
        "from_email": contactForm.emailadress.value,
        "phone_number": contactForm.phonenumber.value,
        "destination": contactForm.destination.value,
        "dates": contactForm.bookingdates.value,
        "message": contactForm.bookingrequest.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}
