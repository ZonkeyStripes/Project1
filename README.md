GO GO GADGET RECIPE FINDER

BASIC FUNCTION
-User will input ingredients they have, which is then added to a list
-The list is displayed to the side
-click on "Find recepies" or "Clear recipies" or "Clear all/Restart"

-when "Find recepies" is clicked on a list of recipies are assembled in a list below
	-those recepies will include the ingredients that the user listed
	-the recepies will be in boxes
		-the boxes will be the full width of the page
		-the boxes will start collapsed (like, not a large height) but they will be expandable
		-when (the box)/(a button in the box) is clicked on the box will expand displaying the entire recepie, or collapsed to only show the first part
	-the expanded recepie box will include a "Print" button which will open that recipie in a new tab with little to no formatting, and automatically bring up the print function for the web browser.   *technically not MVP one of the first features we should add* 

-we're not 100% sure how it will be visually presented but:  For a recipie we will have a function which will calculate the nutritional information for it. (like, how many grams of carbs, grams of protein, grams of... fiber? etc)
	-This will require a second API to get these calculations
	-we'll have to figure out how to pull the ingredients information from the recipies which will be submitted to this nutritional calculator API.  (ex. the recipie calls for 3 eggs. how do we reliably grab that info from the recepie and submit it to the new API)
  
  
  --------------------------------
 Non-MVP additional functions we'd like to implement:
 -The "print recipe" button (see line 14 of this readme)
 -Save recipes function
 -inputting amounts for each ingredient
 -provide a shopping list (a list of the items which you lack for a recepie)
    -Maybe add that to the print function???
 -the ability for the user to choose how many recipies the search function will return
    -or perhaps give them a "see next 10 recipies" button/funtion at the bottom of the page

 FILTERS we are considering adding
 -allergy filter
 -vegan/vegitarian filter
 -food ethnicities filter (ex: italian, ethiopian, mexican, french, etc)
 -spice filter (how spicy this food is)  (sam doesn't think this is practical to impliment, let me know if we should just remove it from the list)
