import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: any;
  msg: any;
  constructor(private http: HttpClient, private route: Router, public authService: AuthService, private host: HostService) { }

  ngOnInit(): void {
    if(this.authService.isConnected()) {
      this.route.navigateByUrl('dashboard');
    }
}

connexion(val: any) {
    this.http.post(this.host.myDevHost + 'login', val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.authService.msgErr = "";
          this.authService.setUserInSession(this.user);
          this.route.navigateByUrl('dashboard');
        } else {
          this.authService.msgErr = 'Identifiant ou mot de passe invalide';
        }
      },

    });
  }

}