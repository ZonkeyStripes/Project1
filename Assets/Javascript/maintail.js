let drinkIngredientList = [];

$("#recipes").hide();


$("#recipes").hide();


// add ingredients to the list
$("#addDrinkButton").on("click", function () {
  let newIngredient = $("#drinkInputBox").val().trim();
  $("#drinkInputBox").val("");
  console.log("new Ingredient = " + newIngredient)
  
  drinkIngredientList.push(newIngredient);


  drinkIngredientList.push(newIngredient);


  $("#ingList").empty();
  //create and display new ingredient on web page
  for (let i = 0; i < drinkIngredientList.length; i++) {
    let newItem = $("<li>");
    newItem.text(drinkIngredientList[i]);
    $("#ingList").append($(newItem));
  }
});



$("#clearDrinksButton").on("click", function () {
  drinkIngredientList = [];
  $("#ingList").empty();
});




$("#DrinkSearchButton").on("click", function showDrinks() {
  //   function clearBox() {
  //     $("#drnkHere").text("");
  // }
  // clearBox();


  $("#recipes").show();
  let input = "";

  let input = "";


  for (let i = 0; i < drinkIngredientList.length; i++) {
    input = input + " " + drinkIngredientList[i];
  }
  input = input.trim();

  console.log("input = " + input);
  if (input != "") {


  console.log("input = " + input);

  if (input != "") {


    // let drinkInput = $("input").val()
    let tailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + input
    console.log(tailURL)
    $.ajax({
      url: tailURL,
      method: "GET"
    }).then(function (response) {

      // console.log("Drink: " + response.drinks[0].strDrink)
      // console.log("Drink Id: " + response.drinks[0].idDrink)
      for (i = 0; i < response.drinks.length; i++) {
        // response.drinks.length
        console.log(response.drinks[i].strDrinkThumb)
        let div = $("#recipes")
        let unorderList = $("<ul>").addClass("collapsible popout").attr("data-collapsible", "accordion")
        let dList = $("<li>")
        let divHead = $("<div>").addClass("collapsible-header")
        $(divHead).text(response.drinks[i].strDrink);
        let divBody = $("<div>").addClass("collapsible-body")
        let display = $("<p>").attr("id", "recipe_" + i).text(response.drinks[i].strDrink)


      // console.log("Drink: " + response.drinks[0].strDrink)
      // console.log("Drink Id: " + response.drinks[0].idDrink)

      $("#recipes").show();
      let unorderList = $("<ul>").addClass("collapsible popout").attr("data-collapsible", "accordion")

      for (i = 0; i < response.drinks.length; i++) {

        // response.drinks.length
        console.log(response.drinks[i].strDrinkThumb)

        let div = $("#recipes")
        let dList = $("<li>")
        let divHead = $("<div>").addClass("collapsible-header")
        $(divHead).text(response.drinks[i].strDrink)
        let divBody = $("<div>").addClass("collapsible-body")
        
        

        $(div).append(unorderList)
        $(unorderList).append(dList)
        $(dList).append(divHead)
        $(dList).append(divBody)

        $(divBody).append(display)

        // $(divBody).append(display)
        

        // $(display).attr("id", drnkID)
        // //give the p tag an id
        // $("#recipe_0").append(div)
        // $(div).append(display)
        // $(div).append(imgLink)

        let drnkID = response.drinks[i].idDrink
        // let display = $("<p></p>").text(response.drinks[i].strDrink)
        // let imgLink = $("<a>").attr("href", response.drinks[i].strDrinkThumb).attr("target", "_blank").text(response.drinks[i].strDrinkThumb)
        // let unorder = $("<ul></ul>")
        //when you click on text of drink
        $('#' + drnkID).on('click', function showStuff() {
          function clearStuff() {
            $(unorder).text("")

        

        let drnkID = response.drinks[i].idDrink
        // let display = $("<p></p>").text(response.drinks[i].strDrink)
        // let imgLink = $("<a>").attr("href", response.drinks[i].strDrinkThumb).attr("target", "_blank").text(response.drinks[i].strDrinkThumb)
        let unorder = $("<ul></ul>")
        
        
        //when you click on text of drink
        $('#' + drnkID).on('click', function showStuff() {
          function clearStuff() {
            // $(unorder).text("")

          }
          clearStuff();
          //do the next request in here
          let idURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drnkID

          $.ajax({
            url: idURL,
            method: "GET"
          }).then(function (res) {
            // ingredient and measure list
            for (j = 1; j < 15; j++) {


              console.log(res.drinks[0]);
              let ingredNum = "strIngredient" + j;
              let measureNum = "strMeasure" + j;
              console.log("ingredNum = " + ingredNum);

              if (res.drinks[0][ingredNum] != null) {
                let ingList = $("<li></li>").attr("class", "ingredients").text(res.drinks[0][ingredNum]);
                let measureList = $("<li></li>").attr("class", "measure").text(res.drinks[0][measureNum]);
                console.log(res.drinks[0][ingredNum]);

              
              if (res.drinks[0][ingredNum] != null) {
                
                let display = $("<p>").attr("id", "recipe_" + i).text(response.drinks[i].strDrink)

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


      }




      // display drinks that you can make out of said ingredient
      // onclick of drink, show total ingredients of said mix drink


      //click on text of drink to acquire drink id
      //
    })
  }
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