import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Recipe King!';
  activatedLink = 'recipe';

  /*
  1. Met ngIf in de app component wordt bepaald welke wordt getoond dus in de app comp zal er een property zijn die
  met ngIf gechecked kan worden
  2. and should determine which one is displayed in the header component
  3. so in the header cmponent we should pass the information which link was clicked to the app component
  4. so that I can switch a property there (app component) so that I can switch on and off the selectors recipe and shoppl

emttingen an event in the header which allows us to determine which link was clicked so that we can determine which
component should be shown

  1. wanneer er op de recipe link wordt geklikt
  2. moet de shoppinglist selector niet getoond worden
      - maak een click event aan op de recipe link in de header cmp
      - maak een method aan in de header cmp die een method emit naar de app cmp om de recipeShow property op true
       te zetten.
       - en de shoppingList property op false te zetten
  3. wanneer er op de shoplist link wordt geklinkt moet de recipe container niet getoond worden.
      - maak een click event aan op de shop link in de header cmp
      - maak een method aan in de header cmp die een method emit naar de app cmp om de shoppinglistShow property op true
       te zetten.
       - en de recipe property op false te zetten
 4. maak op de selectors in de app.comp. html een ng if die check of de properties true of false zijn.

*/

  onActiveLink(activeString: string) {
    this.activatedLink === 'recipe' ? this.activatedLink = 'shopList' : this.activatedLink = 'recipe';
    //console.log(activeString);
  }

}


