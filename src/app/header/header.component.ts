import { Component, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'header.component.html'


})
export class HeaderComponent{
collapsed=true;
@Output() category = new EventEmitter<string>();

onCategorySelect(name:string){
    this.category.emit(name);
    }
   

}