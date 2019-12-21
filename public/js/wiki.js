//Materialize Scrollspy, Pushpin, Dropdown initializations
$("#submitButton").on("click", function(event) {
  event.preventDefault();
  var endLocation = $("#stateEnd").val().trim();
  console.log(endLocation);

  // Send an AJAX POST-request with jQuery
  $.post("/api/all", locations);
  // On success, run the following code
  $.get("/api/all", function (data){
    console.log(data);
  })
});