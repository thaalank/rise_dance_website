$(document).ready(function () {

  $("#contactForm").on("submit", function() {
    var formValid = true;
  
    if( $("#contactForm-name").prop("validity").valid ) {
      $("#contactForm-namefeedback").addClass("hidden");
    } else {
      $("#contactForm-namefeedback").removeClass("hidden");
      formValid = false;
    }
//if the user does not enter a valid email or leaves the field blank
    if( $("#contactForm-email").prop("validity").valid ) {
      $("#contactForm-emailfeedback").addClass("hidden");
    } else {
      $("#contactForm-emailfeedback").removeClass("hidden");
      formValid = false;
    }
    return formValid;
});

});
