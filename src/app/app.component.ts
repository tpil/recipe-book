import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categorySelected:string ='recipes';
  
  onCategoryChange(categoryName:string){
    this.categorySelected=categoryName;
  }
}
