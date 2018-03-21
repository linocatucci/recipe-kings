import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token = '';
  authenticated = false;

  constructor(private router: Router) {

  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        (error) => {
          console.log(error);
        }
      )
      .then(
        (response) => {
          this.router.navigate(['recipes']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                this.authenticated = true;
              }
            );
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(
        (error) => {
          console.log(error);
        }
      )
      .then(
        (response) => {
          this.router.navigate(['recipes']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                this.authenticated = true;
              }
            );
        }
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
    console.log('logged out!');
  }
}
