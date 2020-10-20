//Sends the user to the result section and displays the resultsection, if the button to submit choices has been clicked

function submitLink() {

    
    var subLink = document.getElementById("inline-link-input").value;

    if (subLink == "Submit") {
        console.log("Correct");
        
        $(document).ready(function() {

        $("#results-section").removeClass("hidden-results").addClass("show-results");
        window.location = "#results-section";
        
        });
        
    } else if (subLink != "Submit") {
        console.log("This is not working correctly");
        }
    }