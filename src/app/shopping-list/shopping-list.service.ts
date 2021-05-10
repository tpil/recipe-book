import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients :Ingredient[]= [
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",15)
      ];

      getIngredients(){
          //slice() will return a new array everytime.This was we can protect the original array
          return this.ingredients.slice();
      }
      addIngredient(ingr:Ingredient){
        this.ingredients.push(ingr);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      recipeIngredients(ingrs:Ingredient[]){
        this.ingredients.push(...ingrs);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
    
}