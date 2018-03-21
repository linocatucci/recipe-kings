import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';

@Injectable()

export class DatastorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {

  }

  firebaseURl = 'https://ng-recipe-book-5333d.firebaseio.com/recipes.json?auth=';

  // appName = 'https://ng-recipe-book-5333d.firebaseio.com/appName.json';

  saveRecipes() {
    const token = this.authService.getToken();
    return this.http.put(this.firebaseURl + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get(this.firebaseURl + token)
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

