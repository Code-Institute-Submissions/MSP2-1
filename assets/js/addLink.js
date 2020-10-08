function submitLink() {

    
    var subLink = document.getElementById("inline-link-input").value;

    if (subLink == "Submit") {
        console.log("Correct");
        
        window.location = "#results-section";
        
        
    } else if (subLink != "Submit") {
        console.log("This is not working correctly");
        }
    }