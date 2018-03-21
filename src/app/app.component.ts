import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA9Cx-zGK8_6ACMv_cz4KC3wzHGEzDnssQ',
      authDomain: 'ng-recipe-book-5333d.firebaseapp.com'
    });
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['signin']);
    } else {
      this.router.navigate(['recipes']);
    }
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
