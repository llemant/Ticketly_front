import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  msgErr: any;
  msgOK: any;

  constructor(private route: Router) { }

  setUserInSession(u: any) {
    localStorage.setItem('connectedUser', JSON.stringify(u));
  }

  getUserSession() {
    let user: any = localStorage.getItem('connectedUser');
    return JSON.parse(user);
  }

  isConnected() {
    if (this.getUserSession() != null) {
      return true;
    } else {
      return false;
    }
  }

  redirectIfNotConnected() {
    this.msgErr = 'Please log in';
    this.route.navigateByUrl('login');
  }

  disconnect() {
    localStorage.removeItem('connectedUser');
    this.route.navigateByUrl('login');
  }


}