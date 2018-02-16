import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  addedIngredient = new EventEmitter<void>();

  private ingredients: Ingredient [] = [
    new Ingredient('Spaghetti', 1),
    new Ingredient('Boerenkool', 1)
  ];

  constructor() {

  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addedIngredient.emit();
  }

  addIngredients2Array(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.addedIngredient.emit();
  }
}
