import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
  recipeSelected =  new EventEmitter<Recipe>();
  
   private recipes: Recipe[] =[
        new Recipe(
          'Tuscan Chicken Skillet',
          'Bacon, cream, Parmesan -- is your mouth watering yet?',
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg',
          [
            new Ingredient('ounces fettuccine',12),
            new Ingredient('slices bacon, chopped',4),
            new Ingredient(' pound chicken tenders',1),
            new Ingredient('cloves garlic',2)
          ]),
        new Recipe(
          'Big fat burger',
          'What else you need to say?',
          'https://media-cdn.tripadvisor.com/media/photo-s/18/5a/78/da/20190717-161222-largejpg.jpg',
          [
            new Ingredient('Buns',2),
            new Ingredient('beaf',1),
            new Ingredient('tomato-slice',1),
            new Ingredient('french fries',1)
          ])
    
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}