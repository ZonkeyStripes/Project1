$("button").on("click", function() {

    let input = $("#input").val()
    var queryURL = "https://api.edamam.com/search?q=" + input + "&app_id=71e0d17f&app_key=a0c9342317580b0fbf06152010ee5e86";
    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API
      .then(function(response) {

        console.log(response);
// added text of no consequence. ignore
// another addition. ignore again
      });
  });