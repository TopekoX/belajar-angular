import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe | undefined

  constructor(private recipeService: RecipeService ) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe?.ingredients!)
  }

}
