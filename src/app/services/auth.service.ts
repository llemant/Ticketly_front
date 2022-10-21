import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  msgErr: any;
  msgOK: any;

  constructor(private route: Router, private host : HostService, private http : HttpClient) { }

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