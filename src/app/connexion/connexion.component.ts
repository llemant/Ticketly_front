import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: any;
  msg: any;
  constructor(private http: HttpClient, private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isConnected()) {
      this.route.navigateByUrl('dashboard');
    }
}

connexion(val: any) {
    this.http.post('http://localhost:8287/login', val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.authService.setUserInSession(this.user);
          this.route.navigateByUrl('dashboard');
        } else {
          this.authService.msgErr = 'Bad credentials';
        }
      },
      error: (err) => { console.log(err) }
    });
  }

}