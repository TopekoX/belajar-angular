import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Daging Sapi', 2),
        new Ingredient('Daging Lembu', 5)
    ]

    getIngredients() {
        // return the ingredients array
        return this.ingredients.slice()
    }

     addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientChanged.emit(this.ingredients.slice())
    }
    
}
 