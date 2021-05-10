import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
    //we also subscribe to ingredientsChanged event so we can get the new array everytime it changes
    this.shoppingListService.ingredientsChanged.subscribe(
      (newIngr:Ingredient[])=>this.ingredients=newIngr
    );
  }


}
