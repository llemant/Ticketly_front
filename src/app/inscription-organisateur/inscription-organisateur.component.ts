import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription-organisateur',
  templateUrl: './inscription-organisateur.component.html',
  styleUrls: ['./inscription-organisateur.component.css']
})
export class InscriptionOrganisateurComponent implements OnInit {
  user: any;
  msg: any;
  constructor(private http: HttpClient, private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  inscriptionOrganisateur(val: any) {
    this.http.post('http://localhost:8287/organisateur', val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.route.navigateByUrl('login');
        } else {
          this.authService.msgErr = 'Bad credentials';
        }
      },
      error: (err) => { console.log(err) }
    });
  }

}
