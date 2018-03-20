import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class DatastorageService {

  constructor(private http: Http,
              private recipeService: RecipeService) {

  }

  firebaseURl = 'https://ng-recipe-book-5333d.firebaseio.com/recipes.json';
  appName = 'https://ng-recipe-book-5333d.firebaseio.com/appName.json';

  saveRecipes() {
    return this.http.put(this.firebaseURl, this.recipeService.getRecipes());
  }

  getAppName() {
    return this.http.get(this.appName)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  getRecipes() {
    return this.http.get(this.firebaseURl)
      .map(
        (response: Response) => {
          const fetchedRecipes: Recipe[] = response.json();
          for (let recipe of fetchedRecipes) {
            if (!recipe['ingredients']) {
              console.log('##### - ingredients zijn leeg ####');
              recipe['ingredients'] = [];
            }
          }
          return fetchedRecipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

