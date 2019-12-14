$("#cocktail").on("click", function showDrinks () {
  function clearBox() {
    $("#drnkHere").text("");
}
clearBox();
  let drink = $("input").val()
  let tailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink
  $.ajax({
    url: tailURL,
    method: "GET"
  }).then(function(response) {
    
    // console.log("Drink: " + response.drinks[0].strDrink)
    // console.log("Drink Id: " + response.drinks[0].idDrink)
    
    for(i = 0; i < response.drinks.length; i++) {
      
      console.log(response.drinks[i].strDrinkThumb)
      let div = $("<div>")
      let drnkID = response.drinks[i].idDrink
      let display = $("<p></p>").text(response.drinks[i].strDrink)
      let imgLink = $("<a>").attr("href", response.drinks[i].strDrinkThumb).attr("target", "_blank").text(response.drinks[i].strDrinkThumb)
      let unorder = $("<ul></ul>")
      
      $(display).attr("id", drnkID)
      //give the p tag an id
      $("#drnkHere").append(div)
      $(div).append(display)
      $(div).append(imgLink)
      
      //when you click on text of drink
      $('#' + drnkID).on('click', function showStuff() {
        function clearStuff(){
          $(unorder).text("")
        }
        clearStuff();
        //do the next request in here
        let idURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drnkID
        
        $.ajax({
          url: idURL,
          method: "GET"
        }).then(function(res){

            // let id = $("<li></li>").text("Drink ID: " + res.drinks[0].idDrink);
            // $(display).append(id);
            
            for(j = 1; j < 15; j++) {
              
 //           console.log(res.drinks[0]);
            let ingredNum = "strIngredient" + j;
            let measureNum = "strMeasure" + j;
            console.log("ingredNum = " + ingredNum);
            
            if(res.drinks[0][ingredNum] != null) {
            let ingList = $("<li></li>").attr("class", "ingredients").text(res.drinks[0][ingredNum]);
            let measureList = $("<li></li>").attr("class", "measure").text(res.drinks[0][measureNum]);
          
            
            console.log(res.drinks[0][ingredNum]);
            
            $(display).append(unorder)
            $(unorder).append(ingList)
            $(unorder).append(measureList)
              }
            } 
            
            //console.log(res.drinks[0].strIngredient1)
            //console.log(res.drinks[0].strMeasure1)
          })
        })

        //use the id to create an on click event
        
      }
      

    
    
    // display drinks that you can make out of said ingredient
    // onclick of drink, show total ingredients of said mix drink
    
    //click on text of drink to acquire drink id
    //
  })
})
//this is the one for the food. Maria has modified in her file I belive

function showIngredient() {
}
$("#clickMe").on("click", function () {
  let input = $("#input").val()
  var queryURL = "https://api.edamam.com/search?q=" + input + "&app_id=71e0d17f&app_key=a0c9342317580b0fbf06152010ee5e86";
  // Performing our AJAX GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function (response) {
      console.log(response);
    });
});