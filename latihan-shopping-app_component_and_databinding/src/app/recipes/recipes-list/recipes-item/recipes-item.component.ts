import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined
  @Output() recipeSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
     this.recipeSelected.emit() 
  }

}
