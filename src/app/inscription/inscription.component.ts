import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: any;
  msg: any;
  constructor(private http: HttpClient, private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  inscription(val: any) {
    this.http.post('http://localhost:8287/user', val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.authService.setUserInSession(this.user);
          this.route.navigateByUrl('login');
        } else {
          this.authService.msgErr = 'Bad credentials';
        }
      },
      error: (err) => { console.log(err) }
    });
  }

}
