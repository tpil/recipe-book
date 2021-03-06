import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe:Recipe;

  constructor(private recipeService:RecipeService, private slService:ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList(){
    console.log(this.recipe.ingredients);
    this.slService.recipeIngredients(this.recipe.ingredients);
  }
}
