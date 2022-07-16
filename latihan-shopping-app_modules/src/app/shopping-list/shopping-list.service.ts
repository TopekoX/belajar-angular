import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Jeroan Sapi', 12),
        new Ingredient('Tulang Sapi', 5)
    ]

    getIngredients() {
        // return the ingredients array
        return this.ingredients.slice()
    }

    getIngredient(index: number) {
        return this.ingredients[index]
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients)
        this.ingredientChanged.next(this.ingredients.slice())
    }

    updateIngredients(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice())
    }

    deleteIngredients(index: number){
        this.ingredients.splice(index, 1)
        this.ingredientChanged.next(this.ingredients.slice())
    }

}
