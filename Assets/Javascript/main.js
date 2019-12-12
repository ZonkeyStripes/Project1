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

        $("#recipes").empty();

        for(let i = 0; i < 3; i++) {

          // gets and displays recipe name, URL and thumbnail image
          let recipeName = $("<p>");
          let recipeURL = $("<p>");
          let recipeThumbnail = $("<img>");
          recipeThumbnail.attr("src", response.hits[i].recipe.image);
          $(recipeThumbnail).width(200);
          $(recipeName).text(response.hits[i].recipe.label);
          $(recipeName).css('font-weight', 'bold');
          $(recipeURL).text(response.hits[i].recipe.url);

          
          $("#recipes").append(recipeName);
          $("#recipes").append(recipeURL);
          $("#recipes").append(recipeThumbnail);

          let ingred = $("<ul>");
          let ingredientList = response.hits[i].recipe.ingredients;
          console.log(ingredientList);

          // create ingredient list
          for(let j = 0; j < ingredientList.length; j++) {
            let newEl = $("<li>");
            newEl.text(ingredientList[j].text);
            ingred.append(newEl);

          }
          $("#recipes").append(ingred);



          // get and display nutrition info
          let totalCalories = Math. round(response.hits[i].recipe.calories);
          let servings = response.hits[i].recipe.yield;
          let calDiv = $("<div>");
          let servingsDiv = $("<div>");
          let calsPerServing = $("<div>");
          calDiv.text("Total Calories: " + totalCalories);
          servingsDiv.text("# of Servings: " + servings);
          calsPerServing.text(Math.round(totalCalories / servings) + " calories per serving");


          $("#recipes").append(calDiv);
          $("#recipes").append(servingsDiv);
          $("#recipes").append(calsPerServing);

        }

      });
  });