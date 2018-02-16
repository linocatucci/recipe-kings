import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Polpette',
      'Spaghetti with meatballs',
      'https://www.24kitchen.nl/files/styles/social_media_share/public/2017-11/GK120114_ITA_Spaghetti%20con%20Polpette%20al%20sugo%20.jpg?itok=mWWaB6cb',
      'Italian',
      'Dinner',
      [
        new Ingredient('tomatos', 5),
        new Ingredient('minced meat', 3)
      ]
    ),
    new Recipe(
      'Boerenkool m worst',
      'Boerenkool met worst',
      'https://static.ah.nl/static/recepten/img_006188_890x594_JPG.jpg',
      'Dutch',
      'Dinner',
      [
        new Ingredient('worst', 1),
        new Ingredient('boerenkool', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients2Array(ingredients);
  }

}
