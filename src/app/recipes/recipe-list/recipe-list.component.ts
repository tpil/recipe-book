import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test','This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg'),
    new Recipe('A Test','This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
