import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()

    // private recipes: Recipe[] = [
    //     new Recipe('Coto Makassar',
    //                 'Makanan Khas Daerah Makassar, Sulawesi Selatan', 
    //               'https://asset.kompas.com/crops/ljY1r3f3HJaNEuLip3iARQOaK-E=/0x1226:3000x3226/750x500/data/photo/2021/06/11/60c2acf88c6f0.jpg',
    //                [
    //                 new Ingredient('Daging Sapi', 10),
    //                 new Ingredient('Kacang', 5)
    //                ]),          
    //     new Recipe('Kaledo', 
    //               'Makanan Khas Kota Palu, Sulawesi Tengah', 
    //               'https://upload.wikimedia.org/wikipedia/commons/e/eb/Kaledo_soup%2C_Central_Sulawesi%2C_2018-09-16.jpg',
    //               [
    //                new Ingredient('Daging Lembu', 15),
    //                new Ingredient('Ubi Kayu', 5)
    //               ])
    //   ]

    private recipes: Recipe[] = []

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes
        this.recipesChanged.next(this.recipes.slice())
    }
    
    getRecipes() {
        // return (slice()) new array / copy aray
        return this.recipes.slice()
    }

    getRecipe(index: number) {
        return this.recipes[index]
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
    }
    
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice())
    }

}
