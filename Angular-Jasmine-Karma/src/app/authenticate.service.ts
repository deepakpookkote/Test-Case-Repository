import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  authenticate() {
    localStorage.setItem('user', 'Deepak');
  }

  checkAuthentication() {
    return (localStorage.getItem('user') === 'Deepak');
  }
}
