import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {DatastorageService} from '../shared/datastorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private dataStorageService: DatastorageService) {
  }

  appNameFireBase = this.dataStorageService.getAppName();

  onSaveRecipes() {
    this.dataStorageService.saveRecipes()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log('save recipes worked ');
          console.log(data);
        }
      ),
      (error) => {
        console.log(error);
      };
  }

  onFetchRecipes() {
    this.dataStorageService.getRecipes();
  }

}
