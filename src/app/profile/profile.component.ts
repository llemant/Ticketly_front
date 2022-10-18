import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BddService } from '../services/bdd.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authService : AuthService, private http : HttpClient, private bddService : BddService, private route : Router) { }

  ngOnInit(): void {   
    if(!this.authService.isConnected()){
      this.route.navigateByUrl('login');
      this.authService.msgErr = "Veuillez vous connecter";
    }
  }

  suppressionCompte(){
    this.http.delete('http://localhost:' + this.bddService.bddPort + '/account/' + this.authService.getUserSession().login).subscribe({
          next: (data) => {
            this.authService.setUserInSession(null);            
            this.authService.msgErr = "";
            this.authService.msgOK = "Compte supprimé avec succès";
            this.route.navigateByUrl('login');
          },
          error: (err) => { console.log(err) }
        })
  }

}
