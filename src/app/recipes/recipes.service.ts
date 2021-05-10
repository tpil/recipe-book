import { Recipe } from "./recipe.model";

export class RecipeService{
   private recipes: Recipe[] =[
        new Recipe('Recipe 1','This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg'),
        new Recipe('Recipe 2','This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg')
    
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}