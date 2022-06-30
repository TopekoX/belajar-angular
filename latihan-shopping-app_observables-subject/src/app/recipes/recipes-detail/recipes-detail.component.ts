import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe | undefined
  id!: number

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id']
            this.recipe = this.recipeService.getRecipe(this.id)
          } 
        ) 
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe?.ingredients!)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); // bisa pakai cara ke-2 sebagai alternative
  }

}
