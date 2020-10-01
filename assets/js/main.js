$(function() {

  var secondaryOptions = {
    one: ["Shopping", "Sun-Bathing", "Culture"],
    two: ["Skiing", "Hiking", "Sleading"],
    three: ["Hiking", "Culture", "Adventure"],
  };

  $(".radio-group").change(function() {

    $("#secondary-options").removeClass("active");
    $("#options").html("");
    var value = $(this).val();

    if (secondaryOptions[value].length > 0) {
      $.each(secondaryOptions[value], function(k, v) {

        var newOption = $("<input/>").attr({
          type: "radio",
          name: "option2",
          value: v,
          id: "option-2-" + k
        });

        var newLabel = $("<label>").attr("for", "option-2-" + k).html(v).prepend(newOption);

        $("#options").append(newLabel).append("<br/>");

      });
      $("#secondary-options").addClass("active");
    }

  });

  
  $("form").on("submit", function(){
    
    var data = $(this).serialize();
    
    alert(data);
    
    return false;
  });
  
});