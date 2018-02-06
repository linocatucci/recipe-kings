import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipe: Recipe;

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Polpette',
      'Spaghetti with meatballs',
      'https://www.24kitchen.nl/files/styles/social_media_share/public/2017-11/GK120114_ITA_Spaghetti%20con%20Polpette%20al%20sugo%20.jpg?itok=mWWaB6cb',
      'Italian',
      'Dinner'
    ),
    new Recipe(
      'Boerenkool m worst',
      'Boerenkool met worst',
      'https://static.ah.nl/static/recepten/img_006188_890x594_JPG.jpg',
      'Dutch',
      'Dinner'
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onClickedRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
