import { Component, ElementRef, OnDestroy, OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm!: NgForm
  subscription!: Subscription
  editMode = false
  editedItemIndex!: number
  editedItem!: Ingredient
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index
          this.editMode = true
          this.editedItem = this.shoppingListService.getIngredient(index )
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        } 
      )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  onAddItem(form: NgForm) {
    const value = form.value; 
    const newIngredient = new Ingredient(value.name, value.amount)
    this.shoppingListService.addIngredient(newIngredient)
  }

}