import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {DatastorageService} from '../shared/datastorage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private dataStorageService: DatastorageService,
              private authService: AuthService) {
  }

  authenticated = false;

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

  isAuthenticated() {
    this.authenticated = this.authService.isAuthenticated();
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logOut();
  }
}
